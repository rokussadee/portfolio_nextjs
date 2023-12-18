import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import {FunctionComponent} from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Divider} from "@nextui-org/react";


type Props = {
  key: string,
  name: string,
  subtitle: string, 
  aria_label: string,
  content: string,
  year: number,
  tags: Array<number>
}

export const WebProject: FunctionComponent<Props> = ({
  key,
  name,
  subtitle,
  aria_label,
  content,
  year,
  tags
}) => {
  
  return (
  <div className="relative">
    {/* <span className="absolute -left-11">{year}</span> */}
      <Card className="mb-6">
        <CardBody>
          <img className="m-4" src="lips.png"></img>
            <Accordion >
            <AccordionItem
              key={key}
              subtitle={subtitle}
              aria-label={aria_label}
              title={name}
              content={content}
            >
            {content}
            </AccordionItem>
            </Accordion>
        </CardBody>
      </Card>
    </div>
  )
};

