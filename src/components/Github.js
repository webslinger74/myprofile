import React, { Component } from 'react';
import githubcont from '../images/githubcontributions.jpg';
import capture from '../images/capture.jpg';
import Button from './UI/Button';
class Github extends Component {

        state = {
          dataArray:[],
          showApiData:false
        }


  componentDidMount(){
    this.getGitHubApiDetails();
  }

   getGitHubApiDetails = () => {
      const GitHubClient = require('../githubclient.js').GitHubClient;
        console.log(GitHubClient, "githubcli");
       console.log(process.env.REACT_APP_MY_GIT_TOKEN, "MYTOKEN");
        
        
        
        let githubCliDotCom = new GitHubClient({
            baseUri: "https://api.github.com",
            token: process.env.REACT_APP_MY_GIT_TOKEN
          });
        
        var handle = "webslinger74";
        githubCliDotCom.getData({ path: `/users/${handle}` })
          .then(response => {
            const DataArray = [];
         
            for(let key in response.data){
              console.log(key, "the key");    
              let value = response.data[key]
              DataArray.push({[key]:value})
            }

            // need to loop through DataArray and if key is in Filterarray keep in DataArray
            console.log(DataArray, "the data array");
            const FilterArray = ['name', 'login','location', 'created_at', 'updated_at', 'bio', 'public_repos', 'following', 'followers'];
           
            


                 const NewArray = DataArray.filter((item,i) => {
                  console.log(Object.keys(item), "the keyconsole")
                  console.log(FilterArray[0], "filter array o");
                  
                  return FilterArray.includes(Object.keys(item)[0]);

                  })
            
            
            console.log(NewArray, "the dataArray");
            this.setState({
              dataArray:NewArray
            })
          })
           
           
          
            } 
            
        

        returningJSX = (DataArray) => (
          DataArray.map((item,i) => {
            return (
              <div key={i}>
             { Object.keys(item)}: { Object.values(item)} </div>
        
           )
            
             } )
        )


  render(){

  return (
    <div className="github">
      <div className="github__left">
        <a href="https://github.com/webslinger74">
          <img src={capture} style={{ height: '400px', width: '200px', padding: '5rem 5rem' }} alt="" ></img></a>
      </div>

      <div className="github__middle">
        <a href="https://github.com/webslinger74">
          <img src={githubcont} style={{ height: '200px', width: '500px', padding: '5rem 5rem' }} alt="" ></img></a>

      </div>
      <div className="github__right">
      <div style={{marginTop:'100px', height:'30vh', marginBottom:'100px', width:'100px'}}>  {this.state.showApiData ? this.returningJSX(this.state.dataArray) : null} </div>

            <Button 
              value='Get Latest GIT API Info' 
              height='60px' 
              width='120px'
              color='white'
              backgroundColor='grey'
              borderRadius='5px'
              paddingLeft='10px'
              fontSize='20px'
              id={1} 
              change={(event) => this.setState({showApiData:!this.state.showApiData})}>

            </Button>
      </div>
    </div>
  );
}

}

export default Github;