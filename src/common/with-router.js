import { useNavigate } from "react-router-dom";

export default function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    //let location = useLocation();
    let navigate = useNavigate();
    //let params = useParams();
    return <Component {...props} navigate={navigate} />
    /*return (
      <Component
        {...props} 
        router={{ location, navigate, params }}
      />
    );*/
  }

  return ComponentWithRouterProp;
}