/* parser generated by jison 0.4.2 */
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"P":3,"S":4,"e":5,";":6,"ID":7,"=":8,"+":9,"-":10,"*":11,"/":12,"^":13,"!":14,"%":15,"(":16,")":17,"NUMBER":18,"E":19,"PI":20,"$accept":0,"$end":1},
terminals_: {2:"error",6:";",7:"ID",8:"=",9:"+",10:"-",11:"*",12:"/",13:"^",14:"!",15:"%",16:"(",17:")",18:"NUMBER",19:"E",20:"PI"},
productions_: [0,[3,1],[4,1],[4,3],[5,3],[5,3],[5,3],[5,3],[5,3],[5,3],[5,2],[5,2],[5,2],[5,3],[5,1],[5,1],[5,1],[5,1],[5,3],[5,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
             var ss = JSON.stringify(symbol_table, undefined, 2);
             console.log(ss);
             return [this.$, "<ul>\n<li> symbol table;<p> "+ ss + "\n </ul>"];
          
break;
case 4:symbol_table[$$[$0-2]] = this.$ = $$[$0];
break;
case 5:this.$ = $$[$0-2]+$$[$0];
break;
case 6:this.$ = $$[$0-2]-$$[$0];
break;
case 7:this.$ = $$[$0-2]*$$[$0];
break;
case 8:if ($$[$0] == 0) throw new Error("No puedes asignar valor a una constante"); else this.$ = $$[$0-2]/$$[$0];
break;
case 9:this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 10:
          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 11:this.$ = $$[$0-1]/100;
break;
case 12:this.$ = -$$[$0];
break;
case 13:this.$ = $$[$0-1];
break;
case 14:this.$ = Number(yytext);
break;
case 15:this.$ = Math.E;
break;
case 16:this.$ = Math.PI;
break;
case 17:if (!($$[$0] in symbol_table)) throw new Error("Variable no inicializada"); 
				 else this.$ = symbol_table[$$[$0]];
break;
case 18:throw new Error("No puedes asignar valor a una constante");
break;
case 19:throw new Error("No puedes asignar valor a una constante");
break;
}
},
table: [{3:1,4:2,5:3,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{1:[3]},{1:[2,1]},{1:[2,2],6:[1,10],9:[1,11],10:[1,12],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17]},{1:[2,17],6:[2,17],8:[1,18],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],15:[2,17],17:[2,17]},{5:19,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:20,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{1:[2,14],6:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],17:[2,14]},{1:[2,15],6:[2,15],8:[1,21],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],15:[2,15],17:[2,15]},{1:[2,16],6:[2,16],8:[1,22],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],15:[2,16],17:[2,16]},{4:23,5:3,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:24,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:25,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:26,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:27,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:28,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{1:[2,10],6:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],17:[2,10]},{1:[2,11],6:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],17:[2,11]},{5:29,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{1:[2,12],6:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],17:[2,12]},{9:[1,11],10:[1,12],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[1,30]},{5:31,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{5:32,7:[1,4],10:[1,5],16:[1,6],18:[1,7],19:[1,8],20:[1,9]},{1:[2,3]},{1:[2,5],6:[2,5],9:[2,5],10:[2,5],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[2,5]},{1:[2,6],6:[2,6],9:[2,6],10:[2,6],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[2,6]},{1:[2,7],6:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[1,15],14:[1,16],15:[1,17],17:[2,7]},{1:[2,8],6:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[1,15],14:[1,16],15:[1,17],17:[2,8]},{1:[2,9],6:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[1,15],14:[1,16],15:[1,17],17:[2,9]},{1:[2,4],6:[2,4],9:[1,11],10:[1,12],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[2,4]},{1:[2,13],6:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],17:[2,13]},{1:[2,19],6:[2,19],9:[1,11],10:[1,12],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[2,19]},{1:[2,18],6:[2,18],9:[1,11],10:[1,12],11:[1,13],12:[1,14],13:[1,15],14:[1,16],15:[1,17],17:[2,18]}],
defaultActions: {2:[2,1],23:[2,3]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

	var symbol_table = {}
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 18
break;
case 2:return 8 
break;
case 3:return 11
break;
case 4:return 12
break;
case 5:return 10
break;
case 6:return 9
break;
case 7:return 13
break;
case 8:return 14
break;
case 9:return 15
break;
case 10:return 16
break;
case 11:return 17
break;
case 12:return 20
break;
case 13:return 19
break;
case 14:return 6 
break;
case 15:return 7
break;
case 16:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:=)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:;)/,/^(?:[a-zA-Z][a-zA-Z0-9]*)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.Parser = calculator.Parser;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}