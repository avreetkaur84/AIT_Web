import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MarketingPage from './Components/TeamPages/Marketing.page.jsx'
import BrandingPage from './Components/TeamPages/Branding.page.jsx'
import TechPage from './Components/TeamPages/Tech.page.jsx'
import OperationPage from './Components/TeamPages/Operations.page.jsx'
import SponsorshipPage from './Components/TeamPages/Sponsorship.page.jsx'
import DesignPage from './Components/TeamPages/Design.page.jsx'
import TeamPage from './Components/Team/TeamPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<TeamPage/>}/>
      <Route path='marketingTeam' element={<MarketingPage/>}/>
      <Route path='brandingTeam' element={<BrandingPage/>}/>
      <Route path='techTeam' element={<TechPage/>}/>
      <Route path='operationTeam' element={<OperationPage/>}/>
      <Route path='sponsorshipTeam' element={<SponsorshipPage/>}/>
      <Route path='designTeam' element={<DesignPage/>}/>
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)