import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    people: [],
    loading: true,
  };

  // componentDidMount knows if component has rendered at least once
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    // use await for async
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log(this.state.people);
  }

  render() {
    if (this.state.loading) {
      return <div>L O A D I N G</div>;
    }

    if (!this.state.people.length) {
      return <div>NO DATA</div>;
    }

    // #region OPTION 1
    return (
      <div>
        {this.state.people.map((person, index) => (
          <div key={person.login.uuid}>
            <div>
              <img src={person.picture.large} alt="random person" />
            </div>
            {index +
              1 +
              " : " +
              person.name.title +
              " " +
              person.name.first +
              " " +
              person.name.last}
          </div>
        ))}
      </div>
    );
    // #endregion OPTION 1

    // #region OPTION 2 Variable
    // const peopleJSX = this.state.people.map((person, index) => (
    //   <div key={person.login.uuid}>
    //     {index +
    //       1 +
    //       " : " +
    //       person.name.title +
    //       " " +
    //       person.name.first +
    //       " " +
    //       person.name.last}
    //     <div>
    //       <img src={person.picture.large} alt="random person" />
    //     </div>
    //   </div>
    // ));

    // return <div>{peopleJSX}</div>;
    // #endregion OPTION 2 Variable

    // #region OPTION 3 For Loop
    // const peopleJSX = [];

    // this.state.people.forEach((person) => {
    //   peopleJSX.push(
    //     <div key={person.login.uuid}>
    //       {person.name.title + " " + person.name.first + " " + person.name.last}
    //       <div>
    //         <img src={person.picture.large} alt="random person" />
    //       </div>
    //     </div>
    //   );
    // });

    // return <div>{peopleJSX}</div>;
    // #endregion OPTION 3 For Loop
  }
}
