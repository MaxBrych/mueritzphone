import { WarningOutlineIcon } from "@sanity/icons";
import { StringFieldProps, useFormValue } from "sanity";
import { Box, Card, Flex, Stack, Text } from "@sanity/ui";
import { productUrl } from "../../utils/shopifyUrls";

type Store = {
  id: number;
  status: string;
  isDeleted: boolean;
};

export default function ProductHiddenInput(props: StringFieldProps) {
  const store: Store = useFormValue(["store"]) as Store;

  let message;
  if (!store) {
    return <></>;
  } else {
    const shopifyProductUrl = productUrl(store?.id);
    const isActive = store?.status === "active";
    const isDeleted = store?.isDeleted;

    if (!isActive) {
      message = (
        <>
          It does not have an <code>active</code> status in Shopify.
        </>
      );
    }
    if (isDeleted) {
      message = "It has been deleted from Shopify.";
    }

    return (
      <Card
        padding={4}
        radius={2}
        shadow={1}
        tone="critical"
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Flex
          align="flex-start"
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Text size={2} onResize={undefined} onResizeCapture={undefined}>
            <WarningOutlineIcon
              onResize={undefined}
              onResizeCapture={undefined}
            />
          </Text>
          <Box
            flex={1}
            marginLeft={3}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Box onResize={undefined} onResizeCapture={undefined}>
              <Text
                size={2}
                weight="semibold"
                onResize={undefined}
                onResizeCapture={undefined}
              >
                This product is hidden
              </Text>
            </Box>
            <Stack marginTop={4} space={2}>
              <Text size={1} onResize={undefined} onResizeCapture={undefined}>
                {message}
              </Text>
            </Stack>
            {!isDeleted && shopifyProductUrl && (
              <Box
                marginTop={4}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <Text size={1} onResize={undefined} onResizeCapture={undefined}>
                  →{" "}
                  <a href={shopifyProductUrl} target="_blank" rel="noreferrer">
                    View this product on Shopify
                  </a>
                </Text>
              </Box>
            )}
          </Box>
        </Flex>
      </Card>
    );
  }
}
