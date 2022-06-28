import { connect } from "react-redux"; 
import Home from "../Components/Home";

import { addToCart } from "../Services/Actions/actions";

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data))
})






export default connect(mapStateToProps,mapDispatchToProps)(Home);