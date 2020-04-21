export default function WebSocketRouter(routes) {
  let _routes = routes;

  return {
    run : (route, message) => {
      let methods = [];
      let val = _routes[route];
      
      if (Array.isArray(val) === false) {
        methods.push(val);
      } else {
        methods = val;
      }
  
      methods.forEach(c => {
        c(message);
      });
    }
  }  
}