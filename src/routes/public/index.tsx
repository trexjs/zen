import { BrowserRouter } from "react-router-dom";
import { TutorPage } from "@/pages/tutor";
import { WinsonPage } from "@/pages/winson";
import { StudioPage } from "@/pages/studio";
import { ZenPage } from "@/pages/zen";
import { XloxPage } from "@/pages/xlox";

import {
  studioCondition,
  schoolCondition,
  schoolNotFound,
  schoolSearchPage,
  siteCondition,
  tutorCondition,
  tutorNotFound,
  tutorSearchPage,
  zenCondition,
  blogCondition,
  recruitCondition,
  ccNotFound,
  ccSearchPage,
  ccCondition,
} from "../route-map";

// Serch app
import { SearchPage } from "@/modules/search";
import NotFound from "@/modules/search/components/not-found";
import { NotFoundPage } from "@/pages/errors/error-page";
import BlogModule from "@/modules/blog";
import RecruitModule from "@/modules/recruit";
import { CCModule } from "@/modules/coaching-center";

export default function PublicRouter() {
  return (
    <>
      <BrowserRouter>
        <ZenPage />
      </BrowserRouter>
    </>
  );
}
