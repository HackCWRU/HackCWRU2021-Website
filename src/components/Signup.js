import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div id='signup'>
                <form onSubmit={this.handleSubmit}>
                    <label for='name'>Name</label>
                    <input type='text' id='name' name='name'/><br/>
                    <label for='age'>Age</label>
                    <input type='text' id='age' name='age'/><br/>
                    <label for='phone'>Phone</label>
                    <input type='text' id='phone' name='phone'/><br/>
                    <label for='email'>Email</label>
                    <input type='email' id='email' name='email'/><br/>
                    <label for='school'>School</label>
                    <input type='text' id='school' name='school'/><br/>
                    <label for='los'>Level of Study</label>
                    <input type='text' id='los' name='los'/><br/>
                    <datalist id="los">
                        {this.parseSchools}
                    </datalist>
                    <label for='country'>Country</label>
                    <input type='text' id='country' name='country'/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

function getSchools(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv", false);
    xmlHttp.send(null);

    var csvData = new Array();
    var jsonObject = xmlHttp.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(','));
    }
    return csvData;
}
function parseSchools() {
    var Data     = getSchools()
    let MakeItem = function(X) {
        return <option>{X}</option>;
    };
    return <select>{Data.map(MakeItem)}</select>;
}
export default Signup;