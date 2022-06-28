import Navbar from "../Components/Navbar";
import { connect } from "react-redux"; 



const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch => ({
})



export default connect(mapStateToProps,mapDispatchToProps)(Navbar);