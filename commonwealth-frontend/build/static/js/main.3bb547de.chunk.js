(this["webpackJsonpcommonwealth-frontend"]=this["webpackJsonpcommonwealth-frontend"]||[]).push([[0],{38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a(30),s=a.n(r),i=a(10),l=a(4),o=a(5),h=a(8),d=a(7),u=(a(21),a(6)),j=(a(38),a(2)),b=a(31),m=a.n(b).a.create({baseURL:"https://the-drumian-commonwealth.herokuapp.com/api",headers:{"Content-type":"application/json"}}),v=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return m.get("/locations")}},{key:"get",value:function(e){return m.get("/locations/".concat(e))}},{key:"create",value:function(e){return m.post("/locations",e)}},{key:"update",value:function(e,t){return m.put("/locations/".concat(e),t)}},{key:"delete",value:function(e){return m.delete("/locations/".concat(e))}},{key:"findByLocationName",value:function(e){return m.get("/locations?location_name=".concat(e))}}]),e}()),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeLocationName=n.onChangeLocationName.bind(Object(j.a)(n)),n.saveLocation=n.saveLocation.bind(Object(j.a)(n)),n.newLocation=n.newLocation.bind(Object(j.a)(n)),n.state={location_id:null,location_name:"",submitted:!1},n}return Object(o.a)(a,[{key:"onChangeLocationName",value:function(e){this.setState({location_name:e.target.value})}},{key:"saveLocation",value:function(){var e=this,t={location_name:this.state.location_name};v.create(t).then((function(t){e.setState({location_id:t.data.location_id,location_name:t.data.location_name,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newLocation",value:function(){this.setState({location_id:null,location_name:"",submitted:!1})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"You submitted successfully!"}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.newLocation,children:"Add"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"location_name",children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"location_name",required:!0,value:this.state.location_name,onChange:this.onChangeLocationName,name:"location_name"})]}),Object(n.jsx)("button",{onClick:this.saveLocation,className:"btn btn-success",children:"Submit"})]})})}}]),a}(c.Component),y=a(3),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeLocationName=n.onChangeLocationName.bind(Object(j.a)(n)),n.getLocation=n.getLocation.bind(Object(j.a)(n)),n.updateLocation=n.updateLocation.bind(Object(j.a)(n)),n.deleteLocation=n.deleteLocation.bind(Object(j.a)(n)),n.state={currentLocation:{location_id:null,location_name:"",submitted:!1},message:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getLocation(this.props.match.params.location_id)}},{key:"onChangeLocationName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentLocation:Object(y.a)(Object(y.a)({},e.currentLocation),{},{location_name:t})}}))}},{key:"getLocation",value:function(e){var t=this;v.get(e).then((function(e){t.setState({currentLocation:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateLocation",value:function(){var e=this;v.update(this.state.currentLocation.location_id,this.state.currentLocation).then((function(t){console.log(t.data),e.setState({message:"The Location was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteLocation",value:function(){var e=this;v.delete(this.state.currentLocation.location_id).then((function(t){console.log(t.data),e.props.history.push("/Locations")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentLocation;return Object(n.jsx)("div",{children:e?Object(n.jsxs)("div",{className:"edit-form",children:[Object(n.jsx)("h4",{children:"Location"}),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"location_name",children:"Location Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"location_name",value:e.location_name,onChange:this.onChangeLocationName})]})}),Object(n.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteLocation,children:"Delete"}),Object(n.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateLocation,children:"Update"}),Object(n.jsx)("p",{children:this.state.message})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Location..."})]})})}}]),a}(c.Component),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).retrieveLocations=n.retrieveLocations.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActiveLocation=n.setActiveLocation.bind(Object(j.a)(n)),n.state={locations:[],currentLocationl:null,currentIndex:-1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.retrieveLocations()}},{key:"retrieveLocations",value:function(){var e=this;v.getAll().then((function(t){e.setState({locations:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveLocations(),this.setState({currentLocation:null,currentIndex:-1})}},{key:"setActiveLocation",value:function(e,t){this.setState({currentLocation:e,currentIndex:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.locations,c=t.currentLocation,r=t.currentIndex;return Object(n.jsxs)("div",{className:"list row",children:[Object(n.jsx)("div",{className:"col-md-8"}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h4",{children:"Locations List"}),Object(n.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(n.jsx)("li",{className:"list-group-item "+(a===r?"active":""),onClick:function(){return e.setActiveLocation(t,a)},children:t.location_name},a)}))})]}),Object(n.jsx)("div",{className:"col-md-6",children:c?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Location"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Location Name:"})})," ",c.location_name]}),Object(n.jsx)(i.b,{to:"/locations/"+c.location_id,className:"badge badge-warning",children:"Edit"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Location..."})]})})]})}}]),a}(c.Component),x=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return m.get("/players")}},{key:"get",value:function(e){return m.get("/players/".concat(e))}},{key:"create",value:function(e){return m.post("/players",e)}},{key:"update",value:function(e,t){return m.put("/players/".concat(e),t)}},{key:"delete",value:function(e){return m.delete("/players/".concat(e))}}]),e}()),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangePlayerName=n.onChangePlayerName.bind(Object(j.a)(n)),n.onChangePlayerRank=n.onChangePlayerRank.bind(Object(j.a)(n)),n.onChangeDiscordId=n.onChangeDiscordId.bind(Object(j.a)(n)),n.onChangeUserId=n.onChangeUserId.bind(Object(j.a)(n)),n.savePlayer=n.savePlayer.bind(Object(j.a)(n)),n.newPlayer=n.newPlayer.bind(Object(j.a)(n)),n.state={player_id:null,player_rank:"",player_name:"",discord_id:"",user_id:null,submitted:!1},n}return Object(o.a)(a,[{key:"onChangePlayerName",value:function(e){this.setState({player_name:e.target.value})}},{key:"onChangePlayerRank",value:function(e){this.setState({player_rank:e.target.value})}},{key:"onChangeDiscordId",value:function(e){this.setState({discord_id:e.target.value})}},{key:"onChangeUserId",value:function(e){this.setState({user_id:e.target.value})}},{key:"savePlayer",value:function(){var e=this,t={player_rank:this.state.player_rank,player_name:this.state.player_name,discord_id:this.state.discord_id,user_id:this.state.user_id};x.create(t).then((function(t){e.setState({player_id:t.data.player_id,player_rank:t.data.player_rank,player_name:t.data.player_name,discord_id:t.data.discord_id,user_id:t.data.user_id,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newPlayer",value:function(){this.setState({player_id:null,player_rank:"",player_name:"",discord_id:"",user_id:null,submitted:!1})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"You submitted successfully!"}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.newPlayer,children:"Add"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"player_name",children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_name",required:!0,value:this.state.player_name,onChange:this.onChangePlayerName,name:"player_name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"player_rank",children:"Rank"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_rank",required:!0,value:this.state.player_rank,onChange:this.onChangePlayerRank,name:"player_rank"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"discord_id",children:"Discord ID"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"discord_id",required:!0,value:this.state.discord_id,onChange:this.onChangeDiscordId,name:"discord_id"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"user_id",children:"User"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"user_id",required:!0,value:this.state.user_id,onChange:this.onChangeUserId,name:"user_id"})]}),Object(n.jsx)("button",{onClick:this.savePlayer,className:"btn btn-success",children:"Submit"})]})})}}]),a}(c.Component),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangePlayerName=n.onChangePlayerName.bind(Object(j.a)(n)),n.onChangePlayerRank=n.onChangePlayerRank.bind(Object(j.a)(n)),n.onChangeDiscordId=n.onChangeDiscordId.bind(Object(j.a)(n)),n.onChangeUserId=n.onChangeUserId.bind(Object(j.a)(n)),n.getPlayer=n.getPlayer.bind(Object(j.a)(n)),n.updatePlayer=n.updatePlayer.bind(Object(j.a)(n)),n.deletePlayer=n.deletePlayer.bind(Object(j.a)(n)),n.state={currentPlayer:{player_id:null,player_rank:"",player_name:"",discord_id:"",user_id:null,submitted:!1},message:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getPlayer(this.props.match.params.player_id)}},{key:"onChangePlayerName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentPlayer:Object(y.a)(Object(y.a)({},e.currentPlayer),{},{player_name:t})}}))}},{key:"onChangePlayerRank",value:function(e){var t=e.target.value;this.setState((function(e){return{currentPlayer:Object(y.a)(Object(y.a)({},e.currentPlayer),{},{player_rank:t})}}))}},{key:"onChangeDiscordId",value:function(e){var t=e.target.value;this.setState((function(e){return{currentPlayer:Object(y.a)(Object(y.a)({},e.currentPlayer),{},{discord_id:t})}}))}},{key:"onChangeUserId",value:function(e){var t=e.target.value;this.setState((function(e){return{currentPlayer:Object(y.a)(Object(y.a)({},e.currentPlayer),{},{user_id:t})}}))}},{key:"getPlayer",value:function(e){var t=this;x.get(e).then((function(e){t.setState({currentPlayer:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePlayer",value:function(){var e=this;x.update(this.state.currentPlayer.player_id,this.state.currentPlayer).then((function(t){console.log(t.data),e.setState({message:"The Player was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deletePlayer",value:function(){var e=this;x.delete(this.state.currentPlayer.player_id).then((function(t){console.log(t.data),e.props.history.push("/Players")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentPlayer;return Object(n.jsx)("div",{children:e?Object(n.jsxs)("div",{className:"edit-form",children:[Object(n.jsx)("h4",{children:"Player"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"player_name",children:"Player Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_name",value:e.player_name,onChange:this.onChangePlayerName})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"player_rank",children:"Player Rank"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_rank",value:e.player_rank,onChange:this.onChangePlayerRank})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"discord_id",children:"Discord ID"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"discord_id",value:e.discord_id,onChange:this.onChangeDiscordId})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"user_id",children:"User"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"user_id",value:e.user_id,onChange:this.onChangeUserId})]})]}),Object(n.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deletePlayer,children:"Delete"}),Object(n.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updatePlayer,children:"Update"}),Object(n.jsx)("p",{children:this.state.message})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Player..."})]})})}}]),a}(c.Component),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).retrievePlayers=n.retrievePlayers.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActivePlayer=n.setActivePlayer.bind(Object(j.a)(n)),n.state={players:[],currentPlayerl:null,currentIndex:-1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.retrievePlayers()}},{key:"retrievePlayers",value:function(){var e=this;x.getAll().then((function(t){e.setState({players:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrievePlayers(),this.setState({currentPlayer:null,currentIndex:-1})}},{key:"setActivePlayer",value:function(e,t){this.setState({currentPlayer:e,currentIndex:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.players,c=t.currentPlayer,r=t.currentIndex;return Object(n.jsxs)("div",{className:"list row",children:[Object(n.jsx)("div",{className:"col-md-8"}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h4",{children:"Players List"}),Object(n.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(n.jsx)("li",{className:"list-group-item "+(a===r?"active":""),onClick:function(){return e.setActivePlayer(t,a)},children:t.player_name},a)}))})]}),Object(n.jsx)("div",{className:"col-md-6",children:c?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Player"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Player Name:"})})," ",c.player_name]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Player Rank:"})})," ",c.player_rank]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Discord ID:"})})," ",c.discord_id]}),Object(n.jsx)(i.b,{to:"/players/"+c.player_id,className:"badge badge-warning",children:"Edit"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Player..."})]})})]})}}]),a}(c.Component),N=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return m.get("/characters")}},{key:"get",value:function(e){return m.get("/characters/".concat(e))}},{key:"create",value:function(e){return m.post("/characters",e)}},{key:"update",value:function(e,t){return m.put("/characters/".concat(e),t)}},{key:"delete",value:function(e){return m.delete("/characters/".concat(e))}},{key:"findCharactersByPlayer",value:function(e){return m.get("/characters?player_id=".concat(e))}}]),e}()),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeCharacterName=n.onChangeCharacterName.bind(Object(j.a)(n)),n.onChangeCharacterClass=n.onChangeCharacterClass.bind(Object(j.a)(n)),n.onChangeLevel=n.onChangeLevel.bind(Object(j.a)(n)),n.onChangeStatus=n.onChangeStatus.bind(Object(j.a)(n)),n.onChangeStatArray=n.onChangeStatArray.bind(Object(j.a)(n)),n.onChangeLocationId=n.onChangeLocationId.bind(Object(j.a)(n)),n.onChangePlayerId=n.onChangePlayerId.bind(Object(j.a)(n)),n.saveCharacter=n.saveCharacter.bind(Object(j.a)(n)),n.newCharacter=n.newCharacter.bind(Object(j.a)(n)),n.state={character_id:null,character_name:"",character_class:"",level:null,status:"",stat_array:"",player_id:null,location_id:null,submitted:!1},n}return Object(o.a)(a,[{key:"onChangeCharacterName",value:function(e){this.setState({character_name:e.target.value})}},{key:"onChangeCharacterClass",value:function(e){this.setState({character_class:e.target.value})}},{key:"onChangeLevel",value:function(e){this.setState({level:e.target.value})}},{key:"onChangeStatus",value:function(e){this.setState({status:e.target.value})}},{key:"onChangeStatArray",value:function(e){this.setState({stat_array:e.target.value})}},{key:"onChangeLocationId",value:function(e){this.setState({location_id:e.target.value})}},{key:"onChangePlayerId",value:function(e){this.setState({player_id:e.target.value})}},{key:"saveCharacter",value:function(){var e=this,t={character_name:this.state.character_name,character_class:this.state.character_class,level:this.state.level,status:this.state.status,stat_array:this.state.stat_array,location_id:this.state.location_id,player_id:this.state.player_id};N.create(t).then((function(t){e.setState({character_id:t.data.character_id,character_name:t.data.character_name,character_class:t.data.character_class,level:t.data.level,status:t.data.status,stat_array:t.data.stat_array,location_id:t.data.location_id,player_id:t.data.player_id,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newCharacter",value:function(){this.setState({character_id:null,character_name:"",character_class:"",level:null,status:"",stat_array:"",player_id:null,location_id:null,submitted:!1})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"You submitted successfully!"}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.newCharacter,children:"Add"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"character_name",children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"character_name",required:!0,value:this.state.character_name,onChange:this.onChangeCharacterName,name:"character_name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"character_class",children:"Class"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"character_class",required:!0,value:this.state.character_class,onChange:this.onChangeCharacterClass,name:"character_class"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"level",children:"Level"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"level",required:!0,value:this.state.level,onChange:this.onChangeLevel,name:"level"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"status",children:"Status"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"status",required:!0,value:this.state.status,onChange:this.onChangeStatus,name:"status"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"stat_array",children:"Stat Array"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"stat_array",required:!0,value:this.state.stat_array,onChange:this.onChangeStatArray,name:"stat_array"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"player_id",children:"Player"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_id",required:!0,value:this.state.player_id,onChange:this.onChangePlayerId,name:"player_id"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"location_id",children:"Location"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"location_id",required:!0,value:this.state.location_id,onChange:this.onChangeLocationId,name:"location_id"})]}),Object(n.jsx)("button",{onClick:this.saveCharacter,className:"btn btn-success",children:"Submit"})]})})}}]),a}(c.Component),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeCharacterName=n.onChangeCharacterName.bind(Object(j.a)(n)),n.onChangeCharacterClass=n.onChangeCharacterClass.bind(Object(j.a)(n)),n.onChangeLevel=n.onChangeLevel.bind(Object(j.a)(n)),n.onChangerStatus=n.onChangeStatus.bind(Object(j.a)(n)),n.onChangeStatArray=n.onChangeStatArray.bind(Object(j.a)(n)),n.onChangeLocationId=n.onChangeLocationId.bind(Object(j.a)(n)),n.onChangePlayerId=n.onChangePlayerId.bind(Object(j.a)(n)),n.getCharacter=n.getCharacter.bind(Object(j.a)(n)),n.updateCharacter=n.updateCharacter.bind(Object(j.a)(n)),n.deleteCharacter=n.deleteCharacter.bind(Object(j.a)(n)),n.state={currentCharacter:{character_id:null,character_name:"",character_class:"",level:null,status:"",stat_array:"",player_id:null,location_id:null,submitted:!1},message:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCharacter(this.props.match.params.character_id)}},{key:"onChangeCharacterName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{character_name:t})}}))}},{key:"onChangeCharacterClass",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{character_class:t})}}))}},{key:"onChangeLevel",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{level:t})}}))}},{key:"onChangeStatus",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{status:t})}}))}},{key:"onChangeStatArray",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{stat_array:t})}}))}},{key:"onChangeLocationId",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{location_id:t})}}))}},{key:"onChangePlayerId",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCharacter:Object(y.a)(Object(y.a)({},e.currentCharacter),{},{player_id:t})}}))}},{key:"getCharacter",value:function(e){var t=this;N.get(e).then((function(e){t.setState({currentCharacter:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateCharacter",value:function(){var e=this;N.update(this.state.currentCharacter.character_id,this.state.currentCharacter).then((function(t){console.log(t.data),e.setState({message:"The Character was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteCharacter",value:function(){var e=this;N.delete(this.state.currentCharacter.character_id).then((function(t){console.log(t.data),e.props.history.push("/Characters")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentCharacter;return Object(n.jsx)("div",{children:e?Object(n.jsxs)("div",{className:"edit-form",children:[Object(n.jsx)("h4",{children:"Character"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"character_name",children:"Character Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"character_name",value:e.character_name,onChange:this.onChangeCharacterName})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"character_class",children:"Character Class"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"character_class",value:e.character_class,onChange:this.onChangeCharacterClass})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"level",children:"Level"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"level",value:e.level,onChange:this.onChangeLevel})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"status",children:"Status"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"status",value:e.status,onChange:this.onChangeStatus})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"stat_array",children:"Stat Array"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"stat_array",value:e.stat_array,onChange:this.onChangeStatArray})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"location_id",children:"Location"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"location_id",value:e.location_id,onChange:this.onChangeLocationId})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"palyer_id",children:"Player"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"player_id",value:e.player_id,onChange:this.onChangePlayerId})]})]}),Object(n.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteCharacter,children:"Delete"}),Object(n.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateCharacter,children:"Update"}),Object(n.jsx)("p",{children:this.state.message})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Character..."})]})})}}]),a}(c.Component),L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeSearchPlayerName=n.onChangeSearchPlayerName.bind(Object(j.a)(n)),n.retrieveCharacters=n.retrieveCharacters.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActiveCharacter=n.setActiveCharacter.bind(Object(j.a)(n)),n.searchPlayerName=n.searchPlayerName.bind(Object(j.a)(n)),n.state={characters:[],currentCharacterl:null,currentIndex:-1,searchPlayerName:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCharacters()}},{key:"onChangeSearchPlayerName",value:function(e){var t=e.target.value;this.setState({searchPlayerName:t})}},{key:"retrieveCharacters",value:function(){var e=this;N.getAll().then((function(t){e.setState({characters:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveCharacters(),this.setState({currentCharacter:null,currentIndex:-1})}},{key:"setActiveCharacter",value:function(e,t){this.setState({currentCharacter:e,currentIndex:t})}},{key:"searchPlayerName",value:function(){var e=this;N.findByPlayerName(this.state.searchPlayerName).then((function(t){e.setState({characters:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchPlayerName,c=t.characters,r=t.currentCharacter,s=t.currentIndex;return Object(n.jsxs)("div",{className:"list row",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by PlayerName",value:a,onChange:this.onChangeSearchPlayerName}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchPlayerName,children:"Search by Player"})})]})}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h4",{children:"Characters List"}),Object(n.jsx)("ul",{className:"list-group",children:c&&c.map((function(t,a){return Object(n.jsx)("li",{className:"list-group-item "+(a===s?"active":""),onClick:function(){return e.setActiveCharacter(t,a)},children:t.character_name},a)}))})]}),Object(n.jsx)("div",{className:"col-md-6",children:r?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Character"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Character Name:"})})," ",r.character_name]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Player Name:"})})," ",r.player_id]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Character Class:"})})," ",r.character_class]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Level:"})})," ",r.level]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Status:"})})," ",r.status]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Stat Array:"})})," ",r.stat_array]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Location:"})})," ",r.location_id]}),Object(n.jsx)(i.b,{to:"/characters/"+r.character_id,className:"badge badge-warning",children:"Edit"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Character..."})]})})]})}}]),a}(c.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(n.jsx)("a",{href:"/characters",className:"navbar-brand",children:"The Commonwealth"}),Object(n.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/locations",className:"nav-link",children:"Locations"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/addLocation",className:"nav-link",children:"Add Location"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/characters",className:"nav-link",children:"Characters"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/addCharacter",className:"nav-link",children:"Add Character"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/players",className:"nav-link",children:"Players"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/addPlayer",className:"nav-link",children:"Add Player"})})]})]}),Object(n.jsx)("div",{className:"container mt-3",children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:["/","/characters"],component:L}),Object(n.jsx)(u.a,{exact:!0,path:"/addLocation",component:O}),Object(n.jsx)(u.a,{path:"/locations/:location_id",component:g}),Object(n.jsx)(u.a,{exact:!0,path:["/","/locations"],component:p}),Object(n.jsx)(u.a,{exact:!0,path:"/addCharacter",component:k}),Object(n.jsx)(u.a,{path:"/characters/:character_id",component:P}),Object(n.jsx)(u.a,{exact:!0,path:["/","/players"],component:_}),Object(n.jsx)(u.a,{exact:!0,path:"/addPlayer",component:C}),Object(n.jsx)(u.a,{path:"/players/:player_id",component:f})]})})]})}}]),a}(c.Component);s.a.render(Object(n.jsx)(i.a,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.3bb547de.chunk.js.map