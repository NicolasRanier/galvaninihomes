<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All photo paths, Airbnb/map links and contact info live in `src/config/site.ts`; components read from there so the owner can swap photos in one place.
- Room photos are placeholders (`src: null`) until the owner supplies real photos — never generate or stock-fill them.
