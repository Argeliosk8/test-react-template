import React from "react";
import { Link } from "react-router-dom";

export const OffCanvas = ()=>{
    return(
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className="row">
            <div className="col">
              <h6><Link to={"/"}>Home</Link></h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6><Link to={"/dashboard"}>Dashboard</Link></h6>   
            </div>
          </div>       
        </div>
      </div>
    )
}