import socialGitHub from "../fields/social_github";
import socialInstagram from "../fields/social_instagram";
import socialTwitter from "../fields/social_twitter";
import socialYouTube from "../fields/social_you_tube";

const socialProfiles = {
    file: "data/social.json",
    label: "Social Profiles",
    name: "socialProfiles",
    fields: [
        {
            label: "Social media profiles",
            name: "socialMediaProfile",
            widget: "list",
            types: [
                socialGitHub,
                socialInstagram,
                socialTwitter,
                socialYouTube
            ]
        }
    ]
};

export default socialProfiles;