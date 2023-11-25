function Card() {
  return (
    <div className="Card">
     <h1>Hot Drops 🔥</h1>
      <div className="cardDiv">
        <div className="imgDiv">
        <img src="" alt="" />
        </div>
        <div className="cardInfo">
          <div className="title">
            <h2>Classic Jester #1672</h2>
            <div style={{display:"flex", alignItems:"center", gap:"2%"}}>
              <img src="" alt="img" />
              <h3>@handle</h3>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display:"flex", alignItems:"center", gap:"1%"}}>
<img src="" alt="svg" />
<h3>ETH 6</h3>
            </div>
<button className="cardButton">Place Bid</button>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
