(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(2),o=a.n(l);a(14),a(15);function s(){return n.a.createElement("div",{className:"headerSection"},n.a.createElement("img",{src:"https://i.ibb.co/8Nyy0Pd/dribl-00-01-02.png",alt:"g"}))}var c=a(3),i=a(4),u=a(6),m=a(5),p=a(7),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).displayResult=function(){var e=a.state.playerChoice,t=a.state.computerChoice;e===t?a.setState({gameResult:"Draw"}):0===e&&1===t?a.setState({gameResult:"Computer wins",ComputerScore:a.state.ComputerScore+1}):0===e&&2===t?a.setState({gameResult:"Player wins",playerScore:a.state.playerScore+1}):1===e&&0===t?a.setState({gameResult:"Player wins",playerScore:a.state.playerScore+1}):1===e&&2===t?a.setState({gameResult:"Computer wins",ComputerScore:a.state.ComputerScore+1}):2===e&&0===t?a.setState({gameResult:"Computer wins",ComputerScore:a.state.ComputerScore+1}):2===e&&1===t&&a.setState({gameResult:"Player wins",playerScore:a.state.playerScore+1})},a.makeChoice=function(e){var t=Math.floor(3*Math.random())+0;a.setState({playerChoice:e,computerChoice:t},function(){a.displayResult()})},a.state={computerChoice:null,playerChoice:null,gameResult:"Tap to start",playerScore:0,ComputerScore:0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("ul",{className:"scoreCard"},n.a.createElement("li",null,n.a.createElement("h3",null,"Player : ",this.state.playerScore)),n.a.createElement("li",null,n.a.createElement("h3",null,"Computer : ",this.state.ComputerScore)))),n.a.createElement("h1",{id:"resultBox"},this.state.gameResult),n.a.createElement("div",null,"You",n.a.createElement("ul",{className:"weapons"},n.a.createElement("li",null,n.a.createElement("button",{onClick:function(){return e.makeChoice(0)}},n.a.createElement("span",{role:"img","aria-label":"rock"},"\u270a"))),n.a.createElement("li",null,n.a.createElement("button",{onClick:function(){return e.makeChoice(1)}},n.a.createElement("span",{role:"img","aria-label":"paper"},"\u270b"))),n.a.createElement("li",null,n.a.createElement("button",{onClick:function(){return e.makeChoice(2)}},n.a.createElement("span",{role:"img","aria-label":"scissors"},"\u270c"))))))}}]),t}(r.Component);function d(){return n.a.createElement("div",null,n.a.createElement("div",{className:"footer"},'Rock, Paper, Scissors is a simple hand game that is played around the world, with many different names and variations. It is commonly used as a way of coming to decisions, and in some cases is even played for sport. The person that plays the strongest \u201cobject\u201d is the winner of the game. The rules are "Rock beats Scissors , Scissors beat Paper and Paper beats Rock". Whoever wins 5 Rounds wins.'))}var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(h,null),n.a.createElement(d,null))};o.a.render(n.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.0787d3b6.chunk.js.map