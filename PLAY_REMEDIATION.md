# Tech UP Play remediation — September 12, 2026

Package: com.techup. Play app ID: 4975525602975316646.

## Confirmed findings

- The red account row is Tech UP. The account list shows a stale November 2020 update date; the actual News-policy rejection is July 23, 2024. Google also removed the app April 7, 2024 for its missing Data safety submission.
- Latest APK is 2.0 / code 2, uploaded June 19, 2017 (artifact 4618580673376435851). Source uses React Native 0.45.1 and target API 22. Console requires API 36 for updates.
- Live validation of the existing TechCrunch NewsAPI v1 request returns HTTP 200 and ten articles dated May 7–8, 2024. It is not a current news feed. Do not resubmit this binary as a fully remediated news app.
- Play App Signing is not enrolled: keymanagement offers enrollment with an existing Java keystore. The original private signing key is needed to update com.techup. Searches of local keystore filenames and repository history found no Tech UP signing key. Do not generate a replacement key and claim it can update this package.

## Completed

- Published https://priyankark.github.io/TechUpAndroidApp/ from this branch's docs directory. It identifies the developer, contact email, independent aggregator status and original publishers.
- Published that URL in Play Store listing contact details, replacing the unrelated Blogspot URL; retained the existing support email. Console confirmed Change published.
- Added a persistent in-app Contact us button with an offline-readable contact page and link to the same public contact URL. JSX parse and whitespace checks pass. Native validation remains pending.
- Completed and saved the Health apps declaration (no health features).
- Completed and saved the News and Magazine declaration: same developer entity Priyankar Kumar, public contact URL, commercial/private category, news aggregator. The form states no additional credentials are required. These declarations are saved for review, not approved.
- Existing Target audience and Data safety drafts were already pending; they have not been overwritten or submitted by this change.

## Required before restoration

1. Locate the original signing keystore and its password/alias. The owner has been asked where to find the old computer or backup.
2. Modernize the Android build to meet current target API and native-library requirements, replace the stale feed, and show original publishers/authors and publication dates. Preserve bookmarks and source selection.
3. Verify the final binary's actual data flows and complete accurate Data safety/privacy, advertising ID and government-app declarations.
4. Test the signed update and submit it with the completed declarations. Google must approve before the red removal/rejection state clears.

No new Android binary has been built, signed, uploaded or submitted. This branch is a partial remediation, not a store-ready release.
