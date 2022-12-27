import React from "react";
import { WarningOutlineIcon } from "@sanity/icons";
import { StringFieldProps } from "sanity";
import { Box, Card, Flex, Stack, Text } from "@sanity/ui";

export default function CollectionHiddenInput(props: StringFieldProps) {
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
        <Text onResize={undefined} onResizeCapture={undefined}>
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
              weight="semibold"
              onResize={undefined}
              onResizeCapture={undefined}
            >
              This collection is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1} onResize={undefined} onResizeCapture={undefined}>
              It has been deleted from Shopify.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Card>
  );
}
