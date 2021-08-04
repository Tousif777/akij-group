import { CardContent, Card, Typography } from "@material-ui/core";
import Image from "next/image";

const ProductCard = ({ data }) => {
  return (
    <Card>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={data.image}
          alt={data.image}
          height={120}
          width={120}
          objectFit="contain"
        />
        <Typography
          variant="body2"
          color="initial"
          style={{ color: "#1c4084", marginTop: "10px" }}
        >
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
