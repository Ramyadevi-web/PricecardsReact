import Card from './components/Card'
import './index.css'

function App() {
  const data = [
    {
      plan : "FREE",
      price : "0",
      user : "Single User",
      isUser : true,
      storage : "5GB Storage",
      isStorage : true,
      publicProject : "Unlimited Public Projects",
      isPublicProject : true,
      community : "Community Access",
      isCommunity : true,
      privateProject : "Unlimited Private Projects",
      isPrivateProject : false,
      support : "Dedicated Phone Support",
      isSupport : false,
      subdomain : "Free Subdomain",
      isSubdomain : false,
      report : "Monthly Status Report",
      isReport : false
    },
    {
      plan : "PLUS",
      price : "9",
      user : "50GB Storage",
      isUser : true,
      storage : "5GB Storage",
      isStorage : true,
      publicProject : "Unlimited Public Projects",
      isPublicProject : true,
      community : "Community Access",
      isCommunity : true,
      privateProject : "Unlimited Private Projects",
      isPrivateProject :true,
      support : "Dedicated Phone Support",
      isSupport :true,
      subdomain : "Free Subdomain",
      isSubdomain : true,
      report : "Monthly Status Report",
      isReport : false
    },
    {
      plan : "PRO",
      price : "49",
      user : "Unlimited User",
      isUser : true,
      storage : "150GB Storage",
      isStorage : true,
      publicProject : "Unlimited Public Projects",
      isPublicProject : true,
      community : "Community Access",
      isCommunity :true,
      privateProject : "Unlimited Private Projects",
      isPrivateProject : true,
      support : "Dedicated Phone Support",
      isSupport : true,
      subdomain : "Unlimited Free Subdomain",
      isSubdomain : true,
      report : "Monthly Status Report",
      isReport : true
    }
  ]

  return <>
    
       <section className="pricing py-5">
         <div className="container">
          <div className="row">
       
            {
             data.map((e,i) =>{
                return  <Card data = {e} key = {i}/>
            })
            }
           
          </div>
         </div>
        </section>
    </>
  
}

export default App
