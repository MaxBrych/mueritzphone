import { WarningOutlineIcon } from "@sanity/icons";
import { Box, Card, Flex, Stack, Text } from "@sanity/ui";

export default function ProductVariantHiddenInput() {
  return (
    <Card
      padding={4}
      radius={2}
      shadow={1}
      tone="critical"
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <Flex align="flex-start" onResize={undefined} onResizeCapture={undefined}>
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
              This variant is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1} onResize={undefined} onResizeCapture={undefined}>
              It has been deleted from Shopify
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Card>
  );
}
