/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"="                   return '=' 
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"PI"                  return 'PI'
"E"                   return 'E'
";"                   return ';' 
[a-zA-Z][a-zA-Z0-9]*  return 'ID'
//<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex
%{
	var symbol_table = {}
%}	

/* operator associations and precedence */
%left '='
%left '+' '-'  /* cuanto más abajo mayor prioridad       compilar con rake*/  
%left '*' '/'
%right '^'
%left '!'
%right '%'
%left UMINUS

%start P

%% /* language grammar */

P   : S
          {
             var ss = JSON.stringify(symbol_table, undefined, 2);
             console.log(ss);
             return [$$, "<ul>\n<li> symbol table;<p> "+ ss + "\n </ul>"];
          }
    ;
		
S   : e
    | e ';' S
    ;

e
    : ID '=' e
        {symbol_table[$1] = $$ = $3;}
    | e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {if ($3 == 0) throw new Error("No puedes asignar valor a una constante"); else $$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);} /* En vez de yytext se puede poner $1 */
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | ID
        {if (!($ID in symbol_table)) throw new Error("Variable no inicializada"); 
				 else $$ = symbol_table[$ID];}
    | PI '=' e
        {throw new Error("No puedes asignar valor a una constante");}
    | E '=' e
        {throw new Error("No puedes asignar valor a una constante");}
    ;