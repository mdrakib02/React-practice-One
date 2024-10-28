import PropTypes from 'prop-types'; // ES6


export default function Links({ route }) {
  return (
    
    <div>
        
      <li className="text-xl font-bold mr-10 hover:bg-orange-200 px-3 py-1 rounded-xl">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );


}
Links.propTypes ={
    route:PropTypes.object
}
