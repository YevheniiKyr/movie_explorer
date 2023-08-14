// <Downshift>
//     {({
//           getInputProps,
//           getItemProps,
//           getMenuProps,
//           isOpen,
//           inputValue,
//           highlightedIndex,
//           selectedItem
//       }) => (
//         <div>
//             <TextField
//                 id="search"
//                 placeholder="Search"
//                 fullWidth={true}
//                 sx={{mb: 5}}
//                 variant="standard"
//                 InputProps={
//                     {
//                         ...getInputProps({
//                             onChange: inputOnChange
//                         })
//                     }
//
//                 }/>
//             {
//
//                     <Paper square = {true} {...getMenuProps()}>
//                         {
//                             movies
//                                 .results
//                                 .slice(0, 10)
//                                 .filter(item => {
//                                     !inputValue || item.title.toLowerCase().includes(inputValue.toLowerCase())
//                                 })
//                                 .map((item, idx) => (
//                                     <MenuItem {...getItemProps({
//                                         item,
//                                         key: item.id,
//                                         selected: highlightedIndex === idx,
//                                         style: {
//                                             fontWeight: selectedItem === item ? 500 : 400
//                                         }
//                                     })}>
//                                         <Link to={`/movie/${item.id}`}>
//                                             <Grid container={true} spacing={8}>
//                                                 <Grid item={true}>
//                                                     {item.poster.path ?
//                                                         <img src={`${IMAGES_PATH}/w92${item.poster_path}`}
//                                                              alt={item.title}/>
//                                                         :
//                                                         <img src={COVER_PLACEHOLDER} alt={item.title}/>
//                                                     }
//                                                 </Grid>
//                                                 <Grid item={true}></Grid>
//                                             </Grid>
//                                         </Link>
//                                     </MenuItem>
//                                 ))
//
//                         }
//                     </Paper>
//
//             }
//         </div>
//     )}
// </Downshift>