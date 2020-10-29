import React,{Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth:false,
            name:'',
            picture:'',
            email:'no'
        }
    }
    

    componentClicked =() => {
        console.log('facebook btn clicked');
        console.log(window);
    }

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown'){
            let pic = response.picture.data.url;
            console.log(pic);
            this.setState({
                auth: true,
                name: response.name,
                picture : pic,
                email:response.email
            });
        }
     
        
    }

    logout = () => {
        window.FB.logout();
        window.location.reload(false);
    }

    render(){
        let facebookData;

        this.state.auth ? 
            facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                    <h2>{this.state.email}</h2>
                    <button onClick={this.logout}>log out</button>
                </div>
            ):facebookData = (
                <FacebookLogin
                    appId="358024308740214"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        return(
            <div>
                {facebookData}
            </div>
        );
    }
}


export default Facebook;
