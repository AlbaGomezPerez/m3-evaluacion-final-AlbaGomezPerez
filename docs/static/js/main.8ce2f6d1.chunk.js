(window["webpackJsonpm3-evaluacion-final-albagomezperez"]=window["webpackJsonpm3-evaluacion-final-albagomezperez"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),l=t.n(c),m=(t(28),t(16)),s=t(17),i=t(21),o=t(18),u=t(9),h=t(22),N=(t(29),function(e){var a=e.SearchName,t=e.getNameInput;return n.a.createElement("div",{className:"app__filters"},n.a.createElement("input",{type:"text",className:"NameInput",placeholder:"Write a character's name",onChange:t,value:a}))}),d=function(e){var a=e.name,t=e.img,r=e.species,c=e.id;return n.a.createElement("div",{className:"card"},n.a.createElement("ul",{className:"ContainerCharacter",key:c},n.a.createElement("li",{className:"PaintCharacter"},n.a.createElement("div",{className:"CharacterPhotoContainer"},n.a.createElement("img",{className:"CharacterPhoto",src:t,alt:"Imagen de ".concat(a)})),n.a.createElement("div",{className:"CharacterName"},a),n.a.createElement("div",{className:"CharacterSpecies"},r," ","Alien"===r?n.a.createElement("i",{className:"em em-alien"}):n.a.createElement("i",{className:"em em-adult"})))))},E=t(6),p=function(e){var a=e.AllCharacters,t=e.SearchName;return n.a.createElement("ul",{className:"Cartoons"},a.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(E.b,{className:"CardLink",to:"/character/"+e.id},n.a.createElement(d,{name:e.name,img:e.image,species:e.species,id:e.id})))})))},C=function(e){var a=e.AllCharacters,t=e.SearchName,r=e.getNameInput;return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{SearchName:t,getNameInput:r}),n.a.createElement(p,{AllCharacters:a,SearchName:t}))},v=function(e){var a=e.AllCharacters,t=e.Match,r=parseInt(t.params.id);return n.a.createElement("ul",{className:"CartoonsDetail"},a.filter((function(e){return e.id===r})).map((function(e){return n.a.createElement("div",{className:"cardDetail",key:e.id},n.a.createElement(E.b,{className:"DetailLink",to:"/"},n.a.createElement("ul",{className:"ContainerCharacterDetail"},n.a.createElement("li",{className:"PaintCharacterDetail"},n.a.createElement("div",{className:"CharacterPhotoContainerDetail"},n.a.createElement("img",{className:"CharacterPhotoDetail",src:e.image,alt:"Imagen de ".concat(e.name)})),n.a.createElement("div",{className:"ContainerFeaturesDetail"},n.a.createElement("div",{className:"CharacterNameDetail"},e.name),n.a.createElement("div",{className:"CharacterSpeciesDetail"},e.species," ","Alien"===e.species?n.a.createElement("i",{className:"em em-alien"}):n.a.createElement("i",{className:"em em-adult"})),n.a.createElement("div",{className:"CharacterStatusDetail"},e.status," ","Dead"===e.status?n.a.createElement("i",{className:"em em-black_heart"}):""),n.a.createElement("div",{className:"CharacterPlanetDetail"},e.origin.name),n.a.createElement("div",{className:"CharacterEpisodesDetail"},e.episode.length),n.a.createElement("div",{className:"BackContainer"},n.a.createElement("p",{className:"BackText"},"Go back")))))))})))},f=t(5),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={AllCharacters:[],SearchName:""},t.getNameInput=t.getNameInput.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getCartoons()}},{key:"getCartoons",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(a){e.setState({AllCharacters:a.results})}))}},{key:"getNameInput",value:function(e){var a=e.currentTarget.value;this.setState({SearchName:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.AllCharacters,r=a.SearchName;return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",{className:"Title"},"Rick and Morty")),n.a.createElement("main",null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return n.a.createElement(C,{AllCharacters:t,SearchName:r,getNameInput:e.getNameInput})}}),n.a.createElement(f.a,{path:"/character/:id",render:function(e){return n.a.createElement(v,{Match:e.match,AllCharacters:t})}}))))}}]),a}(n.a.Component);l.a.render(n.a.createElement(E.a,null," ",n.a.createElement(g,null)," "),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8ce2f6d1.chunk.js.map