(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,a,t){e.exports=t(63)},37:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(27),i=t.n(r),l=t(12),c=t(8),m=t(9),s=t(11),u=t(10),d=t(13),j=(t(36),t(37),t(1)),h=t(28),g=t.n(h).a.create({baseURL:"http://localhost:8081/api",headers:{"Content-type":"application/json"}}),v=new(function(){function e(){Object(c.a)(this,e)}return Object(m.a)(e,[{key:"getAll",value:function(){return g.get("/radnici")}},{key:"get",value:function(e){return g.get("/radnici/".concat(e))}},{key:"create",value:function(e){return g.post("/radnici",e)}},{key:"update",value:function(e,a){return g.put("/radnici/".concat(e),a)}},{key:"delete",value:function(e){return g.delete("/radnici/".concat(e))}},{key:"deleteAll",value:function(){return g.delete("/radnici")}},{key:"findByTitle",value:function(e){return g.get("/radnici?ime=".concat(e))}}]),e}()),b=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChangeJMB=n.onChangeJMB.bind(Object(j.a)(n)),n.onChangeJMBG=n.onChangeJMBG.bind(Object(j.a)(n)),n.onChangeIme=n.onChangeIme.bind(Object(j.a)(n)),n.onChangePrezime=n.onChangePrezime.bind(Object(j.a)(n)),n.onChangeImeOca=n.onChangeImeOca.bind(Object(j.a)(n)),n.onChangeSpol=n.onChangeSpol.bind(Object(j.a)(n)),n.onChangeDatumRodjenja=n.onChangeDatumRodjenja.bind(Object(j.a)(n)),n.onChangeMjestoRodjenja=n.onChangeMjestoRodjenja.bind(Object(j.a)(n)),n.onChangeOpcinaRodjenja=n.onChangeOpcinaRodjenja.bind(Object(j.a)(n)),n.onChangeDrzavaRodjenja=n.onChangeDrzavaRodjenja.bind(Object(j.a)(n)),n.onChangeOpcinaStanovanja=n.onChangeOpcinaStanovanja.bind(Object(j.a)(n)),n.onChangeMjestoStanovanja=n.onChangeMjestoStanovanja.bind(Object(j.a)(n)),n.onChangeUlica=n.onChangeUlica.bind(Object(j.a)(n)),n.onChangeBrojUlice=n.onChangeBrojUlice.bind(Object(j.a)(n)),n.onChangeNetoOsnovica=n.onChangeNetoOsnovica.bind(Object(j.a)(n)),n.onChangeOrgDio=n.onChangeOrgDio.bind(Object(j.a)(n)),n.onChangeOrgJedinica=n.onChangeOrgJedinica.bind(Object(j.a)(n)),n.onChangeDatumZaposlenja=n.onChangeDatumZaposlenja.bind(Object(j.a)(n)),n.onChangeRadnoMjesto=n.onChangeRadnoMjesto.bind(Object(j.a)(n)),n.saveRadnik=n.saveRadnik.bind(Object(j.a)(n)),n.newRadnik=n.newRadnik.bind(Object(j.a)(n)),n.state={id:null,jmb:"",jmbg:"",ime:"",prezime:"",imeOca:"",spol:"",datumRodjenja:"",mjestoRodjenja:"",opcinaRodjenja:"",drzavaRodjenja:"",opcinaStanovanja:"",mjestoStanovanja:"",ulica:"",brojUlice:"",netoOsnovica:"",orgDio:"",orgJedinica:"",datumZaposlenja:"",radnoMjesto:"",submitted:!1},n}return Object(m.a)(t,[{key:"onChangeJMB",value:function(e){this.setState({jmb:e.target.value})}},{key:"onChangeJMBG",value:function(e){this.setState({jmbg:e.target.value})}},{key:"onChangeIme",value:function(e){this.setState({ime:e.target.value})}},{key:"onChangePrezime",value:function(e){this.setState({prezime:e.target.value})}},{key:"onChangeImeOca",value:function(e){this.setState({imeOca:e.target.value})}},{key:"onChangeSpol",value:function(e){this.setState({spol:e.target.value})}},{key:"onChangeDatumRodjenja",value:function(e){this.setState({datumRodjenja:e.target.value})}},{key:"onChangeMjestoRodjenja",value:function(e){this.setState({mjestoRodjenja:e.target.value})}},{key:"onChangeOpcinaRodjenja",value:function(e){this.setState({opcinaRodjenja:e.target.value})}},{key:"onChangeDrzavaRodjenja",value:function(e){this.setState({drzavaRodjenja:e.target.value})}},{key:"onChangeOpcinaStanovanja",value:function(e){this.setState({opcinaStanovanja:e.target.value})}},{key:"onChangeMjestoStanovanja",value:function(e){this.setState({mjestoStanovanja:e.target.value})}},{key:"onChangeUlica",value:function(e){this.setState({ulica:e.target.value})}},{key:"onChangeBrojUlice",value:function(e){this.setState({brojUlice:e.target.value})}},{key:"onChangeNetoOsnovica",value:function(e){this.setState({netoOsnovica:e.target.value})}},{key:"onChangeOrgDio",value:function(e){this.setState({orgDio:e.target.value})}},{key:"onChangeOrgJedinica",value:function(e){this.setState({orgJedinica:e.target.value})}},{key:"onChangeDatumZaposlenja",value:function(e){this.setState({datumZaposlenja:e.target.value})}},{key:"onChangeRadnoMjesto",value:function(e){this.setState({radnoMjesto:e.target.value})}},{key:"saveRadnik",value:function(){var e=this,a={jmb:this.state.jmb,jmbg:this.state.jmbg,ime:this.state.ime,prezime:this.state.prezime,imeOca:this.state.imeOca,spol:this.state.spol,datumRodjenja:this.state.datumRodjenja,mjestoRodjenja:this.state.mjestoRodjenja,opcinaRodjenja:this.state.opcinaRodjenja,drzavaRodjenja:this.state.drzavaRodjenja,opcinaStanovanja:this.state.opcinaStanovanja,mjestoStanovanja:this.state.mjestoStanovanja,ulica:this.state.ulica,brojUlice:this.state.brojUlice,netoOsnovica:this.state.netoOsnovica,orgDio:this.state.orgDio,orgJedinica:this.state.orgJedinica,datumZaposlenja:this.state.datumZaposlenja,radnoMjesto:this.state.radnoMjesto};console.log("Ovdje su podaci var data:",a),v.create(a).then((function(a){e.setState({id:a.data.id,jmb:a.data.jmb,jmbg:a.data.jmbg,ime:a.data.ime,prezime:a.data.prezime,imeOca:a.data.imeOca,spol:a.data.spol,datumRodjenja:a.data.datumRodjenja,mjestoRodjenja:a.data.mjestoRodjenja,opcinaRodjenja:a.data.opcinaRodjenja,drzavaRodjenja:a.data.drzavaRodjenja,opcinaStanovanja:a.data.opcinaStanovanja,mjestoStanovanja:a.data.mjestoStanovanja,ulica:a.data.ulica,brojUlice:a.data.brojUlice,netoOsnovica:a.data.netoOsnovica,orgDio:a.data.orgDio,orgJedinica:a.data.orgJedinica,datumZaposlenja:a.data.datumZaposlenja,radnoMjesto:a.data.radnoMjesto,submitted:!0}),console.log(a.data)})).catch((function(e){console.log(e)}))}},{key:"newRadnik",value:function(){this.setState({id:null,jmb:"",jmbg:"",ime:"",prezime:"",imeOca:"",spol:"",datumRodjenja:"",mjestoRodjenja:"",opcinaRodjenja:"",drzavaRodjenja:"",opcinaStanovanja:"",mjestoStanovanja:"",ulica:"",brojUlice:"",netoOsnovica:"",orgDio:"",orgJedinica:"",datumZaposlenja:"",radnoMjesto:"",submitted:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"submit-form"},this.state.submitted?o.a.createElement("div",null,o.a.createElement("h4",null,"Uspje\u0161no ste dodali!"),o.a.createElement("button",{className:"btn btn-success",onClick:this.newRadnik},"Add")):o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"jmb"},"JMB"),o.a.createElement("input",{type:"text",className:"form-control",id:"jmb",required:!0,value:this.state.jmb,onChange:this.onChangeJMB,name:"jmb"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"jmbg"},"JMBG"),o.a.createElement("input",{type:"text",className:"form-control",id:"jmbg",required:!0,value:this.state.jmbg,onChange:this.onChangeJMBG,name:"jmbg"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"ime"},"Ime"),o.a.createElement("input",{type:"text",className:"form-control",id:"ime",required:!0,value:this.state.ime,onChange:this.onChangeIme,name:"ime"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"prezime"},"Prezime"),o.a.createElement("input",{type:"text",className:"form-control",id:"prezime",required:!0,value:this.state.prezime,onChange:this.onChangePrezime,name:"prezime"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"imeOca"},"Ime oca"),o.a.createElement("input",{type:"text",className:"form-control",id:"imeOca",required:!0,value:this.state.imeOca,onChange:this.onChangeImeOca,name:"imeOca"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"spol"},"Spol"),o.a.createElement("input",{type:"text",className:"form-control",id:"spol",required:!0,value:this.state.spol,onChange:this.onChangeSpol,name:"spol"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"datumRodjenja"},"Datum ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"datumRodjenja",required:!0,value:this.state.datumRodjenja,onChange:this.onChangeDatumRodjenja,name:"datumRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mjestoRodjenja"},"Mjesto ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"mjestoRodjenja",required:!0,value:this.state.mjestoRodjenja,onChange:this.onChangeMjestoRodjenja,name:"mjestoRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"opcinaRodjenja"},"Op\u0106ina ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"opcinaRodjenja",required:!0,value:this.state.opcinaRodjenja,onChange:this.onChangeOpcinaRodjenja,name:"opcinaRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"drzavaRodjenja"},"Dr\u017eava ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"drzavaRodjenja",required:!0,value:this.state.drzavaRodjenja,onChange:this.onChangeDrzavaRodjenja,name:"drzavaRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"opcinaStanovanja"},"Op\u0107ina stanovanja"),o.a.createElement("input",{type:"text",className:"form-control",id:"opcinaStanovanja",required:!0,value:this.state.opcinaStanovanja,onChange:this.onChangeOpcinaStanovanja,name:"opcinaStanovanja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mjestoStanovanja"},"Mjesto stanovanja"),o.a.createElement("input",{type:"text",className:"form-control",id:"mjestoStanovanja",required:!0,value:this.state.mjestoStanovanja,onChange:this.onChangeMjestoStanovanja,name:"mjestoStanovanja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"ulica"},"Ulica"),o.a.createElement("input",{type:"text",className:"form-control",id:"ulica",required:!0,value:this.state.ulica,onChange:this.onChangeUlica,name:"ulica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"brojUlice"},"Broj ulice"),o.a.createElement("input",{type:"text",className:"form-control",id:"brojUlice",required:!0,value:this.state.brojUlice,onChange:this.onChangeBrojUlice,name:"brojUlice"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"netoOsnovica"},"Neto osnovica"),o.a.createElement("input",{type:"text",className:"form-control",id:"netoOsnovica",required:!0,value:this.state.netoOsnovica,onChange:this.onChangeNetoOsnovica,name:"netoOsnovica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"orgDio"},"Organizacijski dio"),o.a.createElement("input",{type:"text",className:"form-control",id:"orgDio",required:!0,value:this.state.orgDio,onChange:this.onChangeOrgDio,name:"orgDio"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"orgJedinica"},"Organizacijska jedinica"),o.a.createElement("input",{type:"text",className:"form-control",id:"orgJedinica",required:!0,value:this.state.orgJedinica,onChange:this.onChangeOrgJedinica,name:"orgJedinica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"datumZaposlenja"},"Datum zaposlenja"),o.a.createElement("input",{type:"text",className:"form-control",id:"datumZaposlenja",required:!0,value:this.state.datumZaposlenja,onChange:this.onChangeDatumZaposlenja,name:"datumZaposlenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"radnoMjesto"},"Radno mjesto"),o.a.createElement("input",{type:"text",className:"form-control",id:"radnoMjesto",required:!0,value:this.state.radnoMjesto,onChange:this.onChangeRadnoMjesto,name:"radnoMjesto"})),o.a.createElement("button",{onClick:this.saveRadnik,className:"btn btn-success"},"Dodaj")))}}]),t}(n.Component),p=t(2),E=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChangeJMB=n.onChangeJMB.bind(Object(j.a)(n)),n.onChangeJMBG=n.onChangeJMBG.bind(Object(j.a)(n)),n.onChangeIme=n.onChangeIme.bind(Object(j.a)(n)),n.onChangePrezime=n.onChangePrezime.bind(Object(j.a)(n)),n.onChangeImeOca=n.onChangeImeOca.bind(Object(j.a)(n)),n.onChangeSpol=n.onChangeSpol.bind(Object(j.a)(n)),n.onChangeDatumRodjenja=n.onChangeDatumRodjenja.bind(Object(j.a)(n)),n.onChangeMjestoRodjenja=n.onChangeMjestoRodjenja.bind(Object(j.a)(n)),n.onChangeOpcinaRodjenja=n.onChangeOpcinaRodjenja.bind(Object(j.a)(n)),n.onChangeDrzavaRodjenja=n.onChangeDrzavaRodjenja.bind(Object(j.a)(n)),n.onChangeOpcinaStanovanja=n.onChangeOpcinaStanovanja.bind(Object(j.a)(n)),n.onChangeMjestoStanovanja=n.onChangeMjestoStanovanja.bind(Object(j.a)(n)),n.onChangeUlica=n.onChangeUlica.bind(Object(j.a)(n)),n.onChangeBrojUlice=n.onChangeBrojUlice.bind(Object(j.a)(n)),n.onChangeNetoOsnovica=n.onChangeNetoOsnovica.bind(Object(j.a)(n)),n.onChangeOrgDio=n.onChangeOrgDio.bind(Object(j.a)(n)),n.onChangeOrgJedinica=n.onChangeOrgJedinica.bind(Object(j.a)(n)),n.onChangeDatumZaposlenja=n.onChangeDatumZaposlenja.bind(Object(j.a)(n)),n.onChangeRadnoMjesto=n.onChangeRadnoMjesto.bind(Object(j.a)(n)),n.getRadnik=n.getRadnik.bind(Object(j.a)(n)),n.updateRadnik=n.updateRadnik.bind(Object(j.a)(n)),n.deleteRadnik=n.deleteRadnik.bind(Object(j.a)(n)),n.state={currentRadnik:{id:null,jmb:"",jmbg:"",ime:"",prezime:"",imeOca:"",spol:"",datumRodjenja:"",mjestoRodjenja:"",opcinaRodjenja:"",drzavaRodjenja:"",opcinaStanovanja:"",mjestoStanovanja:"",ulica:"",brojUlice:"",netoOsnovica:"",orgDio:"",orgJedinica:"",datumZaposlenja:"",radnoMjesto:""},message:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getRadnik(this.props.match.params.id)}},{key:"onChangeJMB",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{jmb:a})}}))}},{key:"onChangeJMBG",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{jmbg:a})}}))}},{key:"onChangeIme",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{ime:a})}}))}},{key:"onChangePrezime",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{prezime:a})}}))}},{key:"onChangeImeOca",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{imeOca:a})}}))}},{key:"onChangeSpol",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{spol:a})}}))}},{key:"onChangeDatumRodjenja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{datumRodjenja:a})}}))}},{key:"onChangeMjestoRodjenja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{mjestoRodjenja:a})}}))}},{key:"onChangeOpcinaRodjenja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{opcinaRodjenja:a})}}))}},{key:"onChangeDrzavaRodjenja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{drzavaRodjenja:a})}}))}},{key:"onChangeOpcinaStanovanja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{opcinaStanovanja:a})}}))}},{key:"onChangeMjestoStanovanja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{mjestoStanovanja:a})}}))}},{key:"onChangeUlica",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{ulica:a})}}))}},{key:"onChangeBrojUlice",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{brojUlice:a})}}))}},{key:"onChangeNetoOsnovica",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{netoOsnovica:a})}}))}},{key:"onChangeOrgDio",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{orgDio:a})}}))}},{key:"onChangeOrgJedinica",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{orgJedinica:a})}}))}},{key:"onChangeDatumZaposlenja",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{datumZaposlenja:a})}}))}},{key:"onChangeRadnoMjesto",value:function(e){var a=e.target.value;this.setState((function(e){return{currentRadnik:Object(p.a)(Object(p.a)({},e.currentRadnik),{},{radnoMjesto:a})}}))}},{key:"getRadnik",value:function(e){var a=this;v.get(e).then((function(e){a.setState({currentRadnik:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateRadnik",value:function(){var e=this;v.update(this.state.currentRadnik.id,this.state.currentRadnik).then((function(a){console.log(a.data),e.setState({message:"Radnik je uspje\u0161no a\u017euriran!"})})).catch((function(e){console.log(e)}))}},{key:"deleteRadnik",value:function(){var e=this;v.delete(this.state.currentRadnik.id).then((function(a){console.log(a.data),e.props.history.push("/radnici")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentRadnik;return o.a.createElement("div",null,e?o.a.createElement("div",{className:"edit-form"},o.a.createElement("h4",null,"Radnici"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"jmb"},"JMB"),o.a.createElement("input",{type:"text",className:"form-control",id:"jmb",required:!0,value:e.jmb,onChange:this.onChangeJMB,name:"jmb"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"jmbg"},"JMBG"),o.a.createElement("input",{type:"text",className:"form-control",id:"jmbg",required:!0,value:e.jmbg,onChange:this.onChangeJMBG,name:"jmbg"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"ime"},"Ime"),o.a.createElement("input",{type:"text",className:"form-control",id:"ime",required:!0,value:e.ime,onChange:this.onChangeIme,name:"ime"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"prezime"},"Prezime"),o.a.createElement("input",{type:"text",className:"form-control",id:"prezime",required:!0,value:e.prezime,onChange:this.onChangePrezime,name:"prezime"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"imeOca"},"Ime oca"),o.a.createElement("input",{type:"text",className:"form-control",id:"imeOca",required:!0,value:e.imeOca,onChange:this.onChangeImeOca,name:"imeOca"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"spol"},"Spol"),o.a.createElement("input",{type:"text",className:"form-control",id:"spol",required:!0,value:e.spol,onChange:this.onChangeSpol,name:"spol"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"datumRodjenja"},"Datum ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"datumRodjenja",required:!0,value:e.datumRodjenja,onChange:this.onChangeDrzavaRodjenja,name:"datumRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mjestoRodjenja"},"Mjesto ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"mjestoRodjenja",required:!0,value:e.mjestoRodjenja,onChange:this.onChangeMjestoRodjenja,name:"mjestoRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"opcinaRodjenja"},"Op\u0107ina ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"opcinaRodjenja",required:!0,value:e.opcinaRodjenja,onChange:this.onChangeOpcinaRodjenja,name:"opcinaRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"drzavaRodjenja"},"Dr\u017eava ro\u0111enja"),o.a.createElement("input",{type:"text",className:"form-control",id:"drzavaRodjenja",required:!0,value:e.drzavaRodjenja,onChange:this.onChangeDrzavaRodjenja,name:"drzavaRodjenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"opcinaStanovanja"},"Op\u0107ina stanovanja"),o.a.createElement("input",{type:"text",className:"form-control",id:"opcinaStanovanja",required:!0,value:e.opcinaStanovanja,onChange:this.onChangeOpcinaStanovanja,name:"opcinaStanovanja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mjestoStanovanja"},"Mjesto stanovanja"),o.a.createElement("input",{type:"text",className:"form-control",id:"mjestoStanovanja",required:!0,value:e.mjestoStanovanja,onChange:this.onChangeMjestoStanovanja,name:"mjestoStanovanja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"ulica"},"Ulica"),o.a.createElement("input",{type:"text",className:"form-control",id:"ulica",required:!0,value:e.ulica,onChange:this.onChangeUlica,name:"ulica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"brojUlice"},"Broj ulice"),o.a.createElement("input",{type:"text",className:"form-control",id:"brojUlice",required:!0,value:e.brojUlice,onChange:this.onChangeBrojUlice,name:"brojUlice"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"netoOsnovica"},"Neto osnovica"),o.a.createElement("input",{type:"text",className:"form-control",id:"netoOsnovica",required:!0,value:e.netoOsnovica,onChange:this.onChangeNetoOsnovica,name:"netoOsnovica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"orgDio"},"Organizacijski dio"),o.a.createElement("input",{type:"text",className:"form-control",id:"orgDio",required:!0,value:e.orgDio,onChange:this.onChangeOrgDio,name:"orgDio"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"orgJedinica"},"Organizacijska jedinica"),o.a.createElement("input",{type:"text",className:"form-control",id:"orgJedinica",required:!0,value:e.orgJedinica,onChange:this.onChangeOrgJedinica,name:"orgJedinica"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"datumZaposlenja"},"Datum zaposlenja"),o.a.createElement("input",{type:"text",className:"form-control",id:"datumZaposlenja",required:!0,value:e.datumZaposlenja,onChange:this.onChangeDatumZaposlenja,name:"datumZaposlenja"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"radnoMjesto"},"Radno mjesto"),o.a.createElement("input",{type:"text",className:"form-control",id:"radnoMjesto",required:!0,value:e.radnoMjesto,onChange:this.onChangeRadnoMjesto,name:"radnoMjesto"}))),o.a.createElement("button",{className:"badge badge-danger mr-2",onClick:this.deleteRadnik},"Izbri\u0161i"),o.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:this.updateRadnik},"A\u017euriraj"),o.a.createElement("p",null,this.state.message)):o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("p",null,"Molimo Vas kliknite na Radnika...")))}}]),t}(n.Component),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChangeSearchIme=n.onChangeSearchIme.bind(Object(j.a)(n)),n.retrieveRadnici=n.retrieveRadnici.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActiveRadnik=n.setActiveRadnik.bind(Object(j.a)(n)),n.removeAllRadnici=n.removeAllRadnici.bind(Object(j.a)(n)),n.searchIme=n.searchIme.bind(Object(j.a)(n)),n.state={radnici:[],currentRadnik:null,currentIndex:-1,searchIme:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.retrieveRadnici()}},{key:"onChangeSearchIme",value:function(e){var a=e.target.value;this.setState({searchIme:a})}},{key:"retrieveRadnici",value:function(){var e=this;v.getAll().then((function(a){e.setState({radnici:a.data}),console.log(a.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveRadnici(),this.setState({currentRadnik:null,currentIndex:-1})}},{key:"setActiveRadnik",value:function(e,a){this.setState({currentRadnik:e,currentIndex:a})}},{key:"removeAllRadnici",value:function(){var e=this;v.deleteAll().then((function(a){console.log(a.data),e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"searchIme",value:function(){var e=this;this.setState({currentRadnik:null,currentIndex:-1}),v.findByTitle(this.state.searchIme).then((function(a){e.setState({radnici:a.data}),console.log(a.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.searchIme,n=a.radnici,r=a.currentRadnik,i=a.currentIndex;return o.a.createElement("div",{className:"list row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Tra\u017ei po imenu...",value:t,onChange:this.onChangeSearchIme}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchIme},"Tra\u017ei")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h4",null,"Lista Radnika"),o.a.createElement("ul",{className:"list-group"},n&&n.map((function(a,t){return o.a.createElement("li",{className:"list-group-item "+(t===i?"active":""),onClick:function(){return e.setActiveRadnik(a,t)},key:t},a.ime)}))),o.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllRadnici},"Izbri\u0161i sve radnike")),o.a.createElement("div",{className:"col-md-6"},r?o.a.createElement("div",null,o.a.createElement("h4",null,"Radnik"),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"JMB:"))," ",r.JMB),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"JMBG:"))," ",r.JMBG),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Ime:"))," ",r.ime),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Prezime:"))," ",r.prezime),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Ime oca:"))," ",r.imeOca),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Spol:"))," ",r.spol),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Datum ro\u0111enja:"))," ",r.datumRodjenja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Mjesto ro\u0111enja:"))," ",r.mjestoRodjenja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Op\u0107ina ro\u0111enja:"))," ",r.opcinaRodjenja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Dr\u017eava ro\u0111enja:"))," ",r.drzavaRodjenja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Op\u0107ina stanovanja:"))," ",r.opcinaStanovanja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Mjesto stanovanja:"))," ",r.mjestoStanovanja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Ulica:"))," ",r.ulica),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Broj ulice:"))," ",r.brojUlice),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Neto osnovica:"))," ",r.netoOsnovica),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Organizacijski dio:"))," ",r.orgDio),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Organizacijska jedinica:"))," ",r.orgJedinica),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Datum zaposlenja:"))," ",r.datumZaposlenja),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Radno mjesto:"))," ",r.radnoMjesto),o.a.createElement(l.b,{to:"/radnici/"+r.id,className:"badge badge-warning"},"Uredi")):o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("p",null,"Molimo Vas izaberite Radnika..."))))}}]),t}(n.Component),R=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},o.a.createElement(l.b,{to:"/radnici",className:"navbar-brand"},"Plate"),o.a.createElement("div",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/radnici",className:"nav-link"},"Radnici")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/add-radnik",className:"nav-link"},"Dodaj radnika")))),o.a.createElement("div",{className:"container mt-3"},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:["/","/radnici"],component:C}),o.a.createElement(d.a,{exact:!0,path:"/add-radnik",component:b}),o.a.createElement(d.a,{path:"/radnici/:id",component:E}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l.a,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ec3d881a.chunk.js.map