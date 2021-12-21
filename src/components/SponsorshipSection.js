import React, { Component } from 'react';
import xlablogo from '../Assets/SponsorLogos/xlab.webp'
class SponsorshipSection extends Component{
    render(){
        return (
            <div id = "SponsorshipSection" >
                <div id = "sponsorshipHeader">
                    Make connections <br/>with our incredible sponsors...
                </div>
                <div id = "SponsorGrid" class="flex-grid">
                    <div className="SponsorGrid-Item topTierSponsor"><div><a href="https://weatherhead.case.edu/centers/xlab/"> <img src={xlablogo}></img></a></div></div>
                </div>
            </div>
        )
    }
}

export default SponsorshipSection;
