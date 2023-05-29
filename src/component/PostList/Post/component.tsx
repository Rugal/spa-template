import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { FindAllPostBriefQuery } from "../../../generated/graphql/valstrax/graphql";

export type PostProperty = FindAllPostBriefQuery["findAllPost"][number]

interface IProps {
  post: PostProperty,
  expanded: number | false,
  handler: (postId: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const Post = (p: IProps) =>
  <Accordion expanded={p.expanded === p.post.id} onChange={p.handler(p.post.id)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: "33%", flexShrink: 0 }}>
        {p.post.title}
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>{p.post.rate}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {p.post.tags.map((t) => <Chip key={t.tag.id} label={t.tag.name} variant="outlined" />)}
      </Typography>
    </AccordionDetails>
  </Accordion>;

export default Post;
