import { getProjects } from "../../../sanity/schemas/sanity-utils";
import Image from 'next/image';
import StickySidebar from "../components/StickySidebar";
import { getAboutPage } from "../../../sanity/schemas/sanity-utils";

export const revalidate = 30; // Revalidate every 30 seconds

export default async function About() {
    const aboutPageData = await getAboutPage()

    if (!aboutPageData) {
        return <div>About Page Not Found</div>
    }
    return (
        <div className="pageContent">
            <div className="aboutPage">
            <div className="aboutMain">
                 {/* Philosophy Section */}
                <section className="sectionContainer">
                <div className="aboutContent">
                    <h2 className="aboutTitle">{aboutPageData.philosophyTitle}</h2>
                    {aboutPageData.philosophyDescription1 && (
                    <p className="aboutText">{aboutPageData.philosophyDescription1}</p>
                    )}
                </div>
                {aboutPageData.philosophyProjectData && (
                    <div className="aboutProject">
                    <div className="clientInfo">
                        <h3 className="clientTitle">{aboutPageData.philosophyProjectData.clientName}</h3>
                        <h3 className="projectTitle">{aboutPageData.philosophyProjectData.name}</h3>
                        <h3 className="projectYear">{aboutPageData.philosophyProjectData.projectYear}</h3>
                    </div>
                    {aboutPageData.philosophyProjectData.projectImages && (
                    <div className="projectImages">
                        {aboutPageData.philosophyProjectData.projectImages
                        .slice(0, aboutPageData.philosophyImageCount) // Limit the array
                        .map((image, index) => (
                            image?.asset?.url && (
                            <img
                                key={index}
                                src={image.asset.url}
                                alt={image.alt || aboutPageData.philosophyProjectData.name}
                                className="aboutProductImage"
                            />
                            )
                        ))}
                    </div>
                    )}
                    <div className="projectIntro">
                        {aboutPageData.philosophyDescription2 && (
                        <p className="projectDescription">{aboutPageData.philosophyDescription2}</p>
                        )}
                        {aboutPageData.philosophyFeaturedImage?.asset?.url && (
                        <Image
                            src={aboutPageData.philosophyFeaturedImage.asset.url}
                            alt={aboutPageData.philosophyFeaturedImage.alt || "Featured Image"}
                            width={
                            aboutPageData.philosophyFeaturedImageSize === 'tall' ? 405 : 528
                            }
                            height={
                            aboutPageData.philosophyFeaturedImageSize === 'tall' ? 541 : 339
                            }
                            className={`featuredImage ${aboutPageData.philosophyFeaturedImageSize}FeaturedImage`}
                        />
                        )}
                    </div>
                    </div>
                )}
                </section>

                {/* Story Section */}
                <section className="sectionContainer">
                <div className="aboutContent">
                    <h2 className="aboutTitle">{aboutPageData.storyTitle}</h2>
                    {aboutPageData.storyDescription1 && (
                    <p className="aboutText">{aboutPageData.storyDescription1}</p>
                    )}
                </div>
                {aboutPageData.storyProjectData && (
                    <div className="aboutProject">
                    <div className="clientInfo">
                        <h3 className="clientTitle">{aboutPageData.storyProjectData.clientName}</h3>
                        <h3 className="projectTitle">{aboutPageData.storyProjectData.name}</h3>
                        <h3 className="projectYear">{aboutPageData.storyProjectData.projectYear}</h3>
                    </div>
                    {aboutPageData.storyProjectData.projectImages && (
                        <div className="projectImages">
                        {aboutPageData.storyProjectData.projectImages
                            .slice(0, aboutPageData.storyImageCount) // Limit the array
                            .map((image, index) => (
                            image?.asset?.url && (
                                <img
                                key={index}
                                src={image.asset.url}
                                alt={image.alt || aboutPageData.storyProjectData.name}
                                className="aboutProductImage"
                                />
                            )
                            ))}
                        </div>
                    )}
                    <div className="projectIntro">
                        {aboutPageData.storyDescription2 && (
                        <p className="projectDescription">{aboutPageData.storyDescription2}</p>
                        )}
                        {aboutPageData.storyFeaturedImage?.asset?.url && (
                        <Image
                            src={aboutPageData.storyFeaturedImage.asset.url}
                            alt={aboutPageData.storyFeaturedImage.alt || "Featured Image"}
                            width={
                            aboutPageData.storyFeaturedImageSize === 'tall' ? 405 : 528
                            }
                            height={
                            aboutPageData.storyFeaturedImageSize === 'tall' ? 541 : 339
                            }
                            className={`featuredImage ${aboutPageData.storyFeaturedImageSize}FeaturedImage`}
                        />
                        )}
                    </div>
                    </div>
                )}
                </section>

                {/* Who We Are Section */}
                <section className="sectionContainer">
                <div className="aboutContent">
                    <h2 className="aboutTitle">{aboutPageData.whoTitle}</h2>
                    {aboutPageData.whoDescription1 && (
                    <p className="aboutText">{aboutPageData.whoDescription1}</p>
                    )}
                </div>
                {aboutPageData.whoProjectData && (
                    <div className="aboutProject">
                    <div className="clientInfo">
                        <h3 className="clientTitle">{aboutPageData.whoProjectData.clientName}</h3>
                        <h3 className="projectTitle">{aboutPageData.whoProjectData.name}</h3>
                        <h3 className="projectYear">{aboutPageData.whoProjectData.projectYear}</h3>
                    </div>
                    {aboutPageData.whoProjectData.projectImages && (
                        <div className="projectImages">
                        {aboutPageData.whoProjectData.projectImages
                            .slice(0, aboutPageData.whoImageCount) // Limit the array
                            .map((image, index) => (
                            image?.asset?.url && (
                                <img
                                key={index}
                                src={image.asset.url}
                                alt={image.alt || aboutPageData.whoProjectData.name}
                                className="aboutProductImage"
                                />
                            )
                            ))}
                        </div>
                    )}
                    <div className="projectIntro">
                        {aboutPageData.whoDescription2 && (
                        <p className="projectDescription">{aboutPageData.whoDescription2}</p>
                        )}
                        {aboutPageData.whoFeaturedImage?.asset?.url && (
                        <Image
                            src={aboutPageData.whoFeaturedImage.asset.url}
                            alt={aboutPageData.whoFeaturedImage.alt || "Featured Image"}
                            width={
                            aboutPageData.whoFeaturedImageSize === 'tall' ? 405 : 528
                            }
                            height={
                            aboutPageData.whoFeaturedImageSize === 'tall' ? 541 : 339
                            }
                            className={`featuredImage ${aboutPageData.whoFeaturedImageSize}FeaturedImage`}
                        />
                        )}
                    </div>
                    </div>
                )}
                </section>
            </div>
            <StickySidebar>
                {aboutPageData.pageNote && (
                <div className="pageNote">
                    {aboutPageData.pageNote.workTitle && (
                    <div className="workSection">
                        <h2 className="pageNoteTitle">{aboutPageData.pageNote.workTitle}</h2>
                        {aboutPageData.pageNote.workDescription && (
                        <p className="pageNoteText">{aboutPageData.pageNote.workDescription}</p>
                        )}
                    </div>
                    )}
                    {aboutPageData.pageNote.connectTitle && (
                    <div className="connectSection">
                        <h2 className="pageNoteTitle">{aboutPageData.pageNote.connectTitle}</h2>
                        {aboutPageData.pageNote.connectLinks &&
                        aboutPageData.pageNote.connectLinks.map((link, index) => (
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
                    {aboutPageData.pageNote.copyrightText && (
                    <div className="copyRight">
                        <p className="copyRightText"><b>{aboutPageData.pageNote.copyrightBrandName}</b> {aboutPageData.pageNote.copyrightText} {aboutPageData.pageNote.copyrightYear} {aboutPageData.pageNote.copyrightBrandName}</p>
                    </div>
                    )}
                </div>
                )}
            </StickySidebar>
            
        </div>
        <footer className="aboutFooter">
                    {aboutPageData?.pageNote && (
                        <div className="pageNote">
                            <div className="leftSide">
                            {aboutPageData.pageNote.workTitle && (
                                <div className="workSection">
                                <h2 className="pageNoteTitle">{aboutPageData.pageNote.workTitle}</h2>
                                {aboutPageData.pageNote.workDescription && (
                                    <p className="pageNoteText">{aboutPageData.pageNote.workDescription}</p>
                                )}
                                </div>
                            )}
                            {aboutPageData.pageNote.connectTitle && (
                                <div className="connectSection">
                                <h2 className="pageNoteTitle">{aboutPageData.pageNote.connectTitle}</h2>
                                {aboutPageData.pageNote.connectLinks &&
                                    aboutPageData.pageNote.connectLinks.map((link, index) => (
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
                            {aboutPageData.pageNote.copyrightText && (
                            <div className="copyRight"><p className="copyRightText"> <b>{aboutPageData.pageNote.copyrightBrandName}</b> {aboutPageData.pageNote.copyrightText} {aboutPageData.pageNote.copyrightYear} {aboutPageData.pageNote.copyrightBrandName}</p>
                            </div>
                            )}
                        </div>
                    )}
                </footer>
        </div>
        
        
    );
}