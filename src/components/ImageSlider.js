import React from "react";

export default class ImageSlider extends React.Component {
  // this is a shallow state
  // for a non-shallow state, put images and current inside data
  state = {
    images: [
      "https://www.raisedrightpets.com/wp-content/uploads/2022/09/shutterstock_1798926553.jpg",
      "https://t2.ea.ltmcdn.com/en/posts/4/3/7/when_do_chihuahuas_stop_growing_1734_orig.jpg",
      "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-laying-down-with-her-puppies.jpg",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3frqA6qXxPHb5gk9vrZQgcHHA78oUVPshn_5s4k1SQ4hUnq7ScWTNp2YOgJYhUuDeLP5hRI_KJXujwiU",
      "https://nayturr.com/wp-content/uploads/2020/06/long-haired-chihuahua-june122020-min.jpg.webp",
    ],
    current: 2,
  };

  // setState is asynchronous and has a callback function
  next = () => {
    if (this.state.current < this.state.images.length - 1)
      this.setState({ current: this.state.current + 1 }, () => {
        console.log(this.state);
      });
    else
      this.setState({ current: 0 }, () => {
        console.log(this.state);
      });
  };

  render() {
    return (
      <div>
        {/* in-line function (not ideal) */}
        <button
          onClick={() => {
            if (this.state.current > 0)
              this.setState({ current: this.state.current - 1 }, () => {
                console.log(this.state);
              });
            else
              this.setState({ current: this.state.images.length - 1 }, () => {
                console.log(this.state);
              });
          }}
        >
          &lt;
        </button>
        <img
          src={this.state.images[this.state.current]}
          style={{ width: 500, height: 350 }}
        />
        <button onClick={this.next}>&gt;</button>
      </div>
    );
  }
}
