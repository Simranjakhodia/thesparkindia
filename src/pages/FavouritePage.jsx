import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  IconButton,
  Button,
  Box,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  GlobalStyles,
} from "@mui/material";

const FavouritePage = () => {
  console.log("favourite page");

  return (
    <>
      {/* <GlobalStyles
        styles={{
          body: {
            backgroundColor: "white",
          },
        }}
      /> */}
      <List
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          px: 2,
          mx: -2,
          pt: 10,
          mt: -10,
        }}
        disablePadding
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "flex-start",
            my: 0,
            borderBottom: 1,
            borderColor: "divider",
            // alignItems:"flex-start"
          }}
          secondaryAction={
            <IconButton size="small">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          }
          // secondaryPosition="top"
          disablePadding
        >
          <ListItemAvatar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              // height: 100,
              height: (theme) => theme.typography.pxToRem(121),
            }}
          >
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            > */}
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/100x100"
              sx={{ borderRadius: 3 }}
            />
            <Typography
              p={0.5}
              fontSize={(theme) => theme.typography.pxToRem(11)}
              sx={{
                borderRadius: 2,
                bgcolor: "red",
                color: "text.primary",
              }}
            >
              15% off
            </Typography>
            {/* </Box> */}
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                borderRadius: 2,
                bgcolor: "red",
                color: "text.primary",
                // color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <Typography
                p={0.5}
                fontSize={(theme) => theme.typography.pxToRem(11)}
              >
                15% off
              </Typography>
            </Box> */}
          </ListItemAvatar>
          <ListItemText
            sx={{ mt: "-4px", ml: 1 }}
            primary={
              <Typography
                fontWeight={(theme) => theme.typography.fontWeightMedium}
              >
                Super cool 3 mode LED 3v special graded
              </Typography>
            }
            secondary={
              <Typography color="text.primary">
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  // fontWeight={(theme) => theme.typography.fontWeightNormal}
                >
                  Umar Retail marketing
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={(theme) => theme.typography.pxToRem(9)}
                >
                  3.5 / 5
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    // fontSize: (theme) => theme.typography.pxToRem(12),
                    // justifyContent: "space-around"
                  }}
                >
                  <Typography
                    color="text.secondary"
                    fontSize={(theme) => theme.typography.pxToRem(12)}
                  >
                    Rs <del>799</del>
                  </Typography>
                  <Typography
                    ml={2}
                    fontWeight={(theme) => theme.typography.fontWeightMedium}
                    fontSize={(theme) => theme.typography.pxToRem(12)}
                  >
                    Rs 680 per pc
                  </Typography>
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  // sx={{ display: "flex" }}
                  // variant="caption"
                  // color="text.secondary"
                  // fontSize={(theme) => theme.typography.pxToRem(10)}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontSize={(theme) => theme.typography.pxToRem(10)}
                  >
                    Min Qty. 10 (negotiable)
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    //  ml={5}
                  >
                    <Button
                      color="error"
                      sx={{ bgcolor: "background.default", p: 0.2 }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      sx={{
                        p: 0.2,
                        bgcolor: "error.main",
                        color: "error.contrastText",
                        //! hover not color red
                        ".MuiButtonBase-root &:hover": {
                          // bgcolor: "error",
                          color: "error",
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </Stack>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default FavouritePage;
