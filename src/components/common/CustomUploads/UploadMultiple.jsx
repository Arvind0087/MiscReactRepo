import { useDropzone } from "react-dropzone";
import { Box, Stack, Button, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {
  MultiFilePreview,
  RejectionFiles,
  SingleFilePreview,
} from "components/uploadCustom";
import Iconify from "../iconify/Iconify";
import UploadIcon from "@mui/icons-material/Upload";

const StyledDropZone = styled("div")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  "&:hover": {
    opacity: 0.72,
  },
}));

export default function UploadMultipleCustom({
  disabled,
  multiple = false,
  error,
  helperText,
  file,
  onDelete,
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  sx,
  label,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple,
    disabled,
    ...other,
  });
  const hasFile = !!file && !multiple;
  const hasFiles = files && multiple && files.length > 0;
  const isError = isDragReject || !!error;

  return (
    <Box sx={{ width: 1, position: "relative", height: "100%", ...sx }}>
      <StyledDropZone
        {...getRootProps()}
        sx={{
          ...(isDragActive && {
            opacity: 0.72,
          }),
          ...(isError && {
            color: "error.main",
            bgcolor: "error.lighter",
            borderColor: "error.light",
          }),
          ...(disabled && {
            opacity: 0.48,
            pointerEvents: "none",
          }),
          ...(hasFile && {
            padding: "12% 0",
          }),
        }}
      >
        <input {...getInputProps()} />

        <Placeholder
          sx={{
            ...(hasFile && {
              opacity: 0,
            }),
          }}
          label={label}
        />

        {hasFile && <SingleFilePreview file={file} />}
      </StyledDropZone>

      <RejectionFiles fileRejections={fileRejections} />

      {hasFile && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: "absolute",
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}

      {hasFiles && (
        <>
          <Box sx={{ my: 3 }}>
            <MultiFilePreview
              files={files}
              thumbnail={thumbnail}
              onRemove={onRemove}
            />
          </Box>

          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            {onRemoveAll && (
              <Button
                color="inherit"
                variant="outlined"
                size="small"
                onClick={onRemoveAll}
              >
                Remove all
              </Button>
            )}

            {onUpload && (
              <Button size="small" variant="contained" onClick={onUpload}>
                Upload files
              </Button>
            )}
          </Stack>
        </>
      )}

      {helperText && helperText}
    </Box>
  );
}

function Placeholder({ sx,label, ...other }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        width: 1,
        textAlign: {
          xs: "center",
          md: "left",
        },
        ...sx,
      }}
      {...other}
    >
      <UploadIcon
        sx={{
          fontSize: "150px",
        }}
      />

      <Box sx={{ p: 3 }}>
        <Typography gutterBottom variant="h5">
          Drop or Select file {label}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Drop files here or click
          <Typography
            variant="body2"
            component="span"
            sx={{
              mx: 0.5,
              color: "primary.main",
              textDecoration: "underline",
            }}
          >
            browse
          </Typography>
          thorough your device
        </Typography>
      </Box>
    </Stack>
  );
}
