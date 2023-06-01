// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoin = () => {
    const {heads, tails, tossResultImage} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = tossResultImage
    let headsCount = heads
    let tailsCount = tails

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,

      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {heads, tails, tossResultImage} = this.state
    const totalCount = heads + tails
    return (
      <div className="container">
        <div className="coin-container">
          <h1 className="heading">Coin toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <div className="coin-img-container">
            <img
              src={tossResultImage}
              alt="toss result"
              className="toss-result-img"
            />
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total: {totalCount}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
