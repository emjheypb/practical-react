import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    person: null,
  };

  // componentDidMount knows if component has rendered at least once
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    // use await for async
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
    console.log(this.state.person);
  }

  render() {
    return (
      <div>
        {!this.state.person ? (
          <div>LOADING</div>
        ) : (
          <div>
            <div>
              <img src={this.state.person.picture.large} alt="random person" />
            </div>
            {this.state.person.name.title +
              " " +
              this.state.person.name.first +
              " " +
              this.state.person.name.last}
          </div>
        )}
      </div>
    );
  }
}
