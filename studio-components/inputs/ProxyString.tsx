import { LockIcon } from "@sanity/icons";
import { Box, Text, TextInput, Tooltip } from "@sanity/ui";
import {
  StringInputProps,
  useFormValue,
  SanityDocument,
  StringSchemaType,
} from "sanity";
import get from "lodash.get";

type Props = StringInputProps<
  StringSchemaType & { options?: { field?: string } }
>;

const ProxyString = (props: Props) => {
  const { schemaType } = props;

  const path = schemaType?.options?.field;
  const doc = useFormValue([]) as SanityDocument;

  const proxyValue = path ? (get(doc, path) as string) : "";

  return (
    <Tooltip
      content={
        <Box padding={2} onResize={undefined} onResizeCapture={undefined}>
          <Text muted size={1} onResize={undefined} onResizeCapture={undefined}>
            This value is set in Shopify (<code>{path}</code>)
          </Text>
        </Box>
      }
      portal
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <TextInput
        iconRight={LockIcon}
        readOnly={true}
        value={proxyValue}
        onResize={undefined}
        onResizeCapture={undefined}
      />
    </Tooltip>
  );
};

export default ProxyString;
