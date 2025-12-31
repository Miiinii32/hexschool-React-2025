import { useState, useEffect, useRef } from "react";

function App() {
  const ProductsData = [
    {
      category: "甜甜圈",
      content:
        "嚴選靜岡抹茶粉，帶出溫潤茶香與微苦層次，搭配濃郁可可巧克力，苦甜平衡、風味深沉。",
      size: "尺寸：14x14cm",
      description:
        "濃嚴選靜岡抹茶粉，帶出溫潤茶香與微苦層次，搭配濃郁可可巧克力，苦甜平衡、風味深沉。外層柔軟、內裡濕潤，每一口都是抹茶與巧克力交織而成的細緻享受，適合搭配咖啡或熱茶，成就午後的療癒時光。",
      id: "-L9tH8jxVb2Ka_DYPwng",
      is_enabled: 1,
      origin_price: 250,
      price: 250,
      title: "靜岡抹茶濃巧甜甜圈",
      unit: "元",
      num: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1685779923926-e9edebbb133d?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagesUrls: [
        "https://plus.unsplash.com/premium_photo-1723766430269-05a94f9ff8ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1644501963068-a779762d3673?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
      ],
    },
    {
      category: "甜甜圈",
      content:
        "以細緻白巧克力糖漿輕柔包覆，甜香溫潤不膩，灑上香脆杏仁粒，增添層次口感。",
      size: "尺寸：14x14cm",
      description:
        "嚴選細緻白巧克力糖漿，帶出溫潤奶香與柔和甜味，搭配香脆杏仁粒，增添堅果層次。外層柔軟、口感細緻，每一口都是奶香與杏仁交織而成的優雅享受，適合搭配咖啡或熱茶，點綴午後的靜謐時光。",
      id: "-McJ-VvcwfN1_Ye_NtVA",
      is_enabled: 1,
      origin_price: 200,
      price: 200,
      title: "白巧克力杏仁甜甜圈",
      unit: "元",
      num: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1685779923111-cf3601239d65?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagesUrls: [
        "https://images.unsplash.com/photo-1694695549733-3ca67279ae70?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1694319838098-77a2586f667c?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      category: "甜甜圈",
      content:
        "濃厚黑巧克力醬帶出深沉可可風味，搭配酥脆堅果碎，苦甜之間層次分明。",
      size: "尺寸：14x14cm",
      description:
        "濃郁黑巧克力醬展現深沉可可風味，微苦中帶出成熟層次，搭配酥脆堅果碎，口感豐富而平衡。外層柔軟、風味厚實，每一口都令人回味，適合喜愛濃巧風味的午後片刻。",
      id: "-McJ-VyqaFlLzUMmpPpm",
      is_enabled: 1,
      origin_price: 200,
      price: 200,
      title: "黑巧克力堅果甜甜圈",
      unit: "元",
      num: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1685779923240-d9bff8a35ca7?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagesUrls: [
        "https://images.unsplash.com/photo-1576021220401-9f1453159c62?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1635847421700-2d838aa6b597?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      category: "甜甜圈",
      content:
        "嚴選雙配焦糖醬，香氣濃郁而不膩口，入口即化的甜香在舌尖緩緩展開、溫潤柔和。",
      size: "尺寸：14x14cm",
      description:
        "精選雙配焦糖醬，釋放濃厚而溫潤的焦糖香氣，甜而不膩、層次分明。外層柔軟、入口即化，焦糖風味在舌尖緩緩展開，為日常時光帶來溫柔而安心的甜點體驗。",
      id: "-L9uF4KxQb7Ra_ZM2WnP",
      is_enabled: 1,
      origin_price: 200,
      price: 200,
      title: "雙重焦糖甜甜圈",
      unit: "元",
      num: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1685779923216-5b386a173447?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagesUrls: [
        "https://images.unsplash.com/photo-1685779923180-b78b6b8231b9?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675978198522-2f7b42a123de?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      category: "甜甜圈",
      content:
        "巧克力牛奶醬的柔順甜香，搭配黑巧克力脆米的微苦與酥脆口感，甜中帶深度，口感豐富而耐吃。",
      size: "尺寸：14x14cm",
      description:
        "香濃巧克力牛奶醬帶出柔順甜香，搭配黑巧克力脆米的微苦與酥脆口感，甜中帶深度、層次豐富。外層柔軟、口感輕快，是一款適合慢慢品嚐的平衡系巧克力甜甜圈。",
      id: "-M0A7Xk9PqB3L_DZ2HnW",
      is_enabled: 1,
      origin_price: 220,
      price: 200,
      title: "巧克力牛奶黑巧脆米甜甜圈",
      unit: "元",
      num: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1685779925328-f1ed0e5df579?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagesUrls: [
        "https://images.unsplash.com/photo-1685779925714-c16c8b440841?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1579761314336-f27ea6297ae1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];
  const [products, setProducts] = useState(ProductsData);
  const [detailProduct, setDetailProduct] = useState(null);
  const [initialProducts] = useState(ProductsData);
  const detailCanvabody = useRef(null);
  const picAccordionCollapse = useRef(null);
  function scrollTop() {
    if (detailCanvabody.current) {
      detailCanvabody.current.scrollTop = 0;
    }
  }
  function hideAccordion() {
    if (picAccordionCollapse.current) {
      picAccordionCollapse.current.classList.remove("show");
    }
  }
  function deleteProduct(productID) {
    const newProductList = products.filter((product) => {
      return product.id !== productID;
    });
    setProducts(newProductList);
  }
  useEffect(() => {
    scrollTop();
  }, [detailProduct]);

  useEffect(() => {
    hideAccordion();
  }, [detailProduct]);

  return (
    <>
      <div className="container mt-4">
        <div className="nav d-flex justify-content-between py-4 border-bottom-black mb-5">
          <div className="d-flex align-items-end ">
            <h1 className="fs-2 fw-bold title-letter-spacing">Products</h1>
            <span className="fs-4 fw-medium ms-5 gray-color pb-1 title-letter-spacing">
              {products.length} items
            </span>
          </div>
          <button
            type="button"
            className="btn primary-btn"
            onClick={() => {
              setProducts(initialProducts);
            }}
          >
            <span className="material-symbols-outlined me-1">
              keyboard_return
            </span>
            重新載入完整商品
          </button>
        </div>
        <ul>
          {products.map((product) => {
            return (
              <li
                className="d-flex justify-content-between align-items-center mb-5"
                key={product.id}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="list-pic"
                />

                <div className="py-5 border-bottom-gray w-100">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fs-4 fw-medium">{product.title}</h5>
                    <h5 className="fs-4 fw-medium ">{`$${product.price}`}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="fs-6 fw-medium gray-color mb-4">
                        {product.category}
                      </p>
                      <p className="fs-6 mb-2 lh-base">{product.size}</p>
                      <p className="fs-6 lh-base">{product.content}</p>
                    </div>
                    <div className="d-flex gap-3">
                      <button
                        type="button"
                        className="btn secondary-btn"
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                      >
                        刪除商品
                      </button>
                      <button
                        type="button"
                        className="btn primary-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        onClick={() => {
                          setDetailProduct(product);
                        }}
                      >
                        查看商品
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="offcanvas offcanvas-end py-4"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between border-bottom-black">
          <h5
            className="offcanvas-title fs-2 fw-bold title-letter-spacing"
            id="offcanvasRightLabel"
          >
            Details
          </h5>
          <button
            type="button"
            className="close-offcanva-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="offcanvas-body" ref={detailCanvabody}>
          {detailProduct ? (
            <>
              <img
                src={detailProduct.imageUrl}
                alt={detailProduct.title}
                className="offcanva-pic mb-5"
              />
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fs-4 fw-medium">{detailProduct.title}</h5>
                <h5 className="fs-4 fw-medium ">{`$${detailProduct.price}`}</h5>
              </div>
              <p className="fs-6 fw-medium gray-color mb-3">
                {detailProduct.category}
              </p>
              <p className="fs-6 mb-2 lh-base">{detailProduct.size}</p>
              <p className="fs-6 lh-base mb-3">{detailProduct.content}</p>
              <div
                className="accordion accordion-flush border-bottom-black "
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      更多圖片
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                    ref={picAccordionCollapse}
                  >
                    <div className="accordion-body">
                      <img
                        src={detailProduct.imagesUrls[0]}
                        alt={detailProduct.title}
                        className="w-100"
                      />
                      <img
                        src={detailProduct.imagesUrls[1]}
                        alt={detailProduct.title}
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
