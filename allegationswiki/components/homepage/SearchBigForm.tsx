import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Router from "next/router";
import Link from 'next/link'



// import { useNavigate } from "react-router-dom";
import perpsService from "../../services/perpsService";
import { valueToPercent } from "@mui/base";



const SearchBigForm = () => {
  const [searchedName, setSearchedName] = useState("");
  const [myOptions, setMyOptions] = useState([]);
  const handleSearchedNameChange = async (event) => {
    const myChange = await event.target.value;
    setSearchedName(myChange);
    if (!(myChange === "") && myChange.length >= 2) {
      const myNames = await perpsService.getPerpsFiltered(myChange);
      setMyOptions(myNames);
    } else {
      setMyOptions([]);
    }
  };

  //https://stackoverflow.com/questions/58984406/setting-text-color-outline-and-padding-on-material-ui-autocomplete-component
  //setTimeout(function(){debugger;}, 5000)

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(189, 4, 4, 0.863)",
            },
          },
        },
      },
    },
  });


  return (
    <div className="searchForm-main">
      <div className="searchForm-autocomplete">
        <ThemeProvider theme={theme}>
          <Autocomplete
            className={"test"}
            id="test"
            clearOnEscape={true}
            freeSolo={false}
            noOptionsText={
              searchedName.length > 1 ? "No Results Found" : "Search Perps"
            }
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.fullname
            }
            loading={searchedName.length > 1 ? true : false}
            filterOptions={(x) => x}
            options={myOptions}
            autoComplete
            filterSelectedOptions
            onChange={(option, mySelection) => {
              if (option.type === "click" && mySelection) {
                    console.log('pushing')
                    

              }
            }}
            isOptionEqualToValue= {(option, value)=>{
              return option.webid === value.webid
            }}
            onInputChange={(event, value, reason) => {
              if (reason === "reset") {
                handleSearchedNameChange({ target: { value: value } });
              } else if (reason === "clear") {
                handleSearchedNameChange({ target: { value: "" } });
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleSearchedNameChange}
                color="primary"
                variant="outlined"
                label="Perp Search"
              />
            )}
            renderOption={(props, option) => {
              const imageurl = option.imageurl;
              const fullname = option.fullname;
              const perpdesc = option.perpdesc;

              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href={`/perp/${option.webid}`}
                >
                  <Box
                    component="span"
                    className="searchForm-result"
                    sx={{
                      "& > img": {
                        mr: 0,
                        flexShrink: 0,
                        verticalAlign: "-10px",
                      },
                    }}
                    {...props}
                  >
                    <Image
                      style ={{
                        marginRight: "8px"
                      }}
                      src={
                        imageurl !== null
                          ? imageurl
                          : "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU="
                      }
                      alt="test"
                      width={25}
                      height={25}
                    />
                    {"   "} {fullname} {"   "}
                    {perpdesc != "NONE" && perpdesc != null
                      ? "   (" + perpdesc + ")"
                      : ""}
                  </Box>
                </Link>
              );
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
export default SearchBigForm;
