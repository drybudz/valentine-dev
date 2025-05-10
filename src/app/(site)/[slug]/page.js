// import { PortableText } from "next-sanity"; //test with the next-sanity
import { PortableText } from "@portabletext/react";
import { getPageData } from "../../../../sanity/schemas/sanity-utils";

export const revalidate = 30; // Revalidate every 30 seconds

export default async function Page({ params }) {
    const { slug } = await params;
    const pageData = await getPageData(slug);

    if (!pageData) {
        return <div>Page not found</div>; // Basic error handling
    }

    console.log("Full Page Data:", pageData);
    console.log("Contact Info Data:", pageData.contactInfo);

    return(
        <div className="pageContainer">
            <header>
                <h1 className="pageTitle">{pageData.pageTitle}</h1>
                <div className="pageDescription"><PortableText value ={pageData.pageDescription}/></div>
                <div className="contactInfo"><PortableText value ={pageData.contactInfo}/></div>
            </header>
            
            
            <div className="pageContent">
                {/* Team Members Page */}
                
                {pageData.teamMembers && pageData.teamMembers.length > 0 && (
                <div className="gallery">
                    {pageData.teamMembers && pageData.teamMembers.map((member) => (
                        <div className="gallery-panel" key={member._id}>
                            <div className="panel-content">
                            <div className="member-title">
                                <span>
                                {member.talentPosition} <i>{member.city}</i>
                                </span>
                            </div>
                            {member.image?.asset?.url && (
                                <img
                                src={member.image.asset.url}
                                alt={member.image.alt || member.fullName}
                                />
                            )}
                            <div className="text-info">
                                <div className="fullname">{member.fullName}</div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}

                {/* Projects Page */}

                {pageData.projects && pageData.projects.length > 0 && (
                    <div className="workImages">
                    {(() => {
                      const allProjectImages = [];
                      pageData.projects.forEach((project) => {
                        const images = [project.mainImage, ...(project.projectImages || [])].filter(Boolean);
                        allProjectImages.push(...images); // Add all images from each project to a single array
                      });
                  
                      // Function to shuffle an array (Fisher-Yates algorithm)
                      const shuffleArray = (array) => {
                        const newArray = [...array];
                        for (let i = newArray.length - 1; i > 0; i--) {
                          const j = Math.floor(Math.random() * (i + 1));
                          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
                        }
                        return newArray;
                      };
                  
                      const shuffledAllImages = shuffleArray(allProjectImages);
                  
                      return shuffledAllImages
                        .slice(0, 16) // Take only the first 16 elements
                        .map((image, index) => (
                          <img
                            key={image?.asset?.url || `all-${index}`}
                            src={image?.asset?.url || ''}
                            alt={image?.alt || 'Project Image'}
                            className="workProductImage"
                          />
                        ));
                    })()}
                  </div>
                )}

                <footer>
                    {pageData?.pageNote && (
                        <div className="pageNote">
                            <div className="leftSide">
                            {pageData.pageNote.workTitle && (
                                <div className="workSection">
                                <h2 className="pageNoteTitle">{pageData.pageNote.workTitle}</h2>
                                {pageData.pageNote.workDescription && (
                                    <p className="pageNoteText">{pageData.pageNote.workDescription}</p>
                                )}
                                </div>
                            )}
                            {pageData.pageNote.connectTitle && (
                                <div className="connectSection">
                                <h2 className="pageNoteTitle">{pageData.pageNote.connectTitle}</h2>
                                {pageData.pageNote.connectLinks &&
                                    pageData.pageNote.connectLinks.map((link, index) => (
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
                            {pageData.pageNote.copyrightText && (
                            <div className="copyRight"><p className="copyRightText"> <b>{pageData.pageNote.copyrightBrandName}</b> {pageData.pageNote.copyrightText} {pageData.pageNote.copyrightYear} {pageData.pageNote.copyrightBrandName}</p>
                            </div>
                            )}
                        </div>
                    )}
                </footer>
            </div>

        </div>
    )
}