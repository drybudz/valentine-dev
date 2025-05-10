import { getHomePage } from "../../../sanity/schemas/sanity-utils";
import Image from 'next/image';
import Link from 'next/link';
import TypingText from "../components/TypingText";
import H2Animation from "../components/H2Animator";
import HomeVideo from "../components/HomeVideo";
import LocationsAndEmailAnimator from "../components/LocationsAndEmailAnimator";

export const revalidate = 30; // Revalidate every 30 seconds

export default async function Home() {

  const homePageData = await getHomePage()

  if (!homePageData) {
    return <div>Home Page Not Found, check the status of the available ones at Sanity Studio</div>;
  }

  const locationsAndEmail = (
    <div className="locationsNemail">
      <div className="locationsCodes">
        <p>{homePageData.locations}</p>
      </div>
      <div className="homeEmail">
      <a href={`mailto:${homePageData.email}`}>{homePageData.email}</a>
      </div>
    </div>
  );

  // 
    console.log("homePageData.servicesList:", homePageData?.servicesList); // ADD THIS LINE


  return (
    <div className="homePage">
      <div className="container">

        {/* Home Page Video */}
        {/* <section className="homeVideo">
          {homePageData?.homeVideo1?.asset?.url ? (
              <video className="videos" autoPlay muted loop>
                <source src={homePageData.homeVideo1.asset.url} type="video/mp4" />
              </video>
            ) : (
              <video className="videos" autoPlay muted loop>
                <source src="assets/road2puerto.mp4" type="video/mp4" />
              </video>
            )}
        </section> */}
        <HomeVideo homePageData={homePageData} />
        
        {/* Slogan 1  REMOVED*/}
        
          {/* <TypingText text={homePageData?.slogan || "Where Vision Meets Execution"} speed={0.06} /> */}
        
        {/* Slogan 2 */}
          <section className="sloganVideo two">

            {/* TODO: confirm with Alex if this video will have the Slogan on top*/}
            <div className="SloganContainerVideo">
            <h1>{homePageData?.companyName || "Valentine"}</h1>
              <H2Animation>
                {homePageData?.slogan || "Where Vision Meets Execution"}
              </H2Animation>
            </div>
            <LocationsAndEmailAnimator
            locations={homePageData.locations}
            email={homePageData.email}
          />
        </section>

        {/* Services 3 */}
        <section className="servicesSection three">
                
                <div className="servicesContainer">
                
                <H2Animation>
                  {homePageData?.servicesTitle || "Our Services"}
                </H2Animation>  

                  <div className="servicesDescription">
                    <p><span>{homePageData?.osDescription || "FULL-SERVICE PRODUCTION AND POST-PRODUCTION, FROM SINGLE ASSETS TO COMPLETE CAMPAIGNS.TECHNICAL EXCELLENCE AND RELIABLE EXECUTION, EVERY TIME."}</span></p>
                  </div>
                  <div className="servicesLists">
                    {homePageData?.servicesList?.map((service, index) => (
                      <div className={`serviceList${index + 1}`} key={index}>
                        <h3>{service?.osTitle}</h3>
                        <ul>
                          {service?.osItems?.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <LocationsAndEmailAnimator
                  locations={homePageData.locations}
                  email={homePageData.email}
                />
                
        </section>
        
        {/* Process 4 */}
        <section className="processSection four">
        
                <div className="processContainer">
                    <H2Animation>
                      {homePageData?.processTitle || "Our Process"}
                    </H2Animation>
                    <div className="processDescription">
                      <div className="processList1">
                        <h3>
                          <span>{homePageData?.opTitle1?.slice(0, 2) || ""}</span>{" "}
                          {homePageData?.opTitle1?.slice(2) || "Discovery"}
                        </h3>
                        <p>{homePageData?.opText1 || "TBD"}</p>
                      </div>
                      <div className="processList2">
                        <h3>
                          <span>{homePageData?.opTitle2?.slice(0, 2) || ""}</span>{" "}
                          {homePageData?.opTitle2?.slice(2) || "Development"}
                        </h3>
                        <p>{homePageData?.opText2 || "TBD"}</p>
                      </div>
                      <div className="processList3">
                        <h3>
                          <span>{homePageData?.opTitle3?.slice(0, 2) || ""}</span>{" "}
                          {homePageData?.opTitle3?.slice(2) || "Production"}
                        </h3>
                        <p>{homePageData?.opText3 || "TBD"}</p>
                      </div>
                      <div className="processList4">
                        <h3>
                          <span>{homePageData?.opTitle4?.slice(0, 2) || ""}</span>{" "}
                          {homePageData?.opTitle4?.slice(2) || "Delivery"}
                        </h3>
                        <p>{homePageData?.opText4 || "TBD"}</p>
                      </div>
                    </div>
                </div>

                <LocationsAndEmailAnimator
                  locations={homePageData.locations}
                  email={homePageData.email}
                />
        </section>
        
        {/* Approach 5 */}
        <section className="approachSection five">
            
            

            <div className="approachContainer">
              <H2Animation>{homePageData?.approachTitle || "Approach"}</H2Animation>
                <div className="approachDescription">
                  <p><span>{homePageData?.aDescription || "We listen. We learn. We adapt. We execute. We finish what we start."}</span></p>
                </div>
            </div>
            
            {/* Page Note */}
              <div className="homeLastVideoFooter">
                <div className="pageNote">
                  <div className="leftSide">
                    {homePageData.pageNote.workTitle && (
                      <div className="workSection">
                        <h2 className="pageNoteTitle">{homePageData.pageNote.workTitle}</h2>
                        {homePageData.pageNote.workDescription && (
                          <p className="pageNoteText">{homePageData.pageNote.workDescription}</p>
                        )}
                      </div>
                    )}
                    {homePageData.pageNote.connectTitle && (
                      <div className="connectSection"> {/* NO WRAPPER HERE FOR LARGE SCREENS */}
                        <h2 className="pageNoteTitle">{homePageData.pageNote.connectTitle}</h2>
                        {homePageData.pageNote.connectLinks &&
                          homePageData.pageNote.connectLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.linkUrl}
                              className="contactLink"
                              target={link.openNewTab ? "_blank" : undefined}
                              rel={link.openNewTab ? "noopener noreferrer" : undefined}
                            >
                              {link.linkTitle}
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                  {homePageData.pageNote.copyrightText && (
                    <div className="copyRight">
                      <p className="copyRightText"><b>{homePageData.pageNote.copyrightBrandName}</b> {homePageData.pageNote.copyrightText} {homePageData.pageNote.copyrightYear} {homePageData.pageNote.copyrightBrandName}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* END Page Note */}
        </section>
        
      </div>
    </div>
  );
}