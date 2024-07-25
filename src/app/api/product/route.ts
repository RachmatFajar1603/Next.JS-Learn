import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike P-6000 premium",
    price: 190900,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b919979-3fce-4226-8884-53cdf099f7aa/p-6000-shoes-sbwFpl.png",
  },
  {
    id: 2,
    title: "Nike Invincible 3",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c4e6cde-9dfe-4fb1-ab1d-e2796f21e12e/invincible-3-road-running-shoes-Wwmmlp.png",
  },
  {
    id: 3,
    title: "Nike Zoom Vomero 5",
    price: 2489000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lkwfba88t6qix4qxaavi/zoom-vomero-5-shoes-qZG4RJ.png",
  },
  {
    id: 4,
    title: "Nike Air Max 1",
    price: 2119000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4927f3e2-b271-4255-844b-772b66ba9f66/air-max-1-shoes-ZCSX34.png",
  },
  // {
  //   id: 5,
  //   title: "Nike Air Max 97",
  //   price: 2389000,
  //   image:
  //     "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yzytjyjnar2wzjiriibk/air-max-97-shoes-EBZrb8.png",
  // },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "not found",
        data: {},
      });
    }
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
