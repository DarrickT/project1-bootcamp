import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isLoggedIn: false,
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    if (this.state.name === "Password") {
      this.setState({
        isLoggedIn: true,
        name: "",
      });
    } else
      this.setState({
        isLoggedIn: false,
        name: "",
      });
  };

  render() {
    return (
      <div>
        <div>
          <div className="video">
            <div>
              <b>
                {this.state.isLoggedIn === true ? (
                  <YoutubeEmbed embedId="fHU6dfPHT-o" />
                ) : (
                  ""
                )}
              </b>{" "}
            </div>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Password"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
