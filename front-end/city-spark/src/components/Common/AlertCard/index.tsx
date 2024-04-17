import { AlertCardProps } from "@/types";
import { Card, CardBody } from "@nextui-org/react";

const AlertCard: React.FC<AlertCardProps> = ({
  startContent,
  alertMessage,
  endContent,
  className,
}) => {
  return (
    <Card className={`bg-rose-100 border-rose-500 border ${className}`}>
      <CardBody className="flex flex-row gap-3 items-center">
        {startContent}
        <p className="text-rose-700">{alertMessage}</p>
        {endContent}
      </CardBody>
    </Card>
  );
};

export default AlertCard;
