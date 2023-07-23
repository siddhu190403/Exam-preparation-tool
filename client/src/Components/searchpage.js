
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../styling/Search.css'

function SearchPage(){
    return (
     <form class="form-inline my-2 my-lg-0">
        <input type='text'className="form-control" id="inputPassword2" class="w-75 p-2"/>
        <button type="submit" class="btn btn-primary mb-2" id='search'>search</button>
      </form>
    )
}

export default SearchPage;