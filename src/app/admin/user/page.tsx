"use client";

import Loader from "@/app/loader";
import { LIMIT } from "@/constants";
import UseFormData from "@/zustand/formData";
import useUser from "@/zustand/user";
import { Box, Button, Modal, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, styled, tableCellClasses } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UniversalData from "@/types/universalData";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const User = () => {
  const [category, setCategory] = useState("");
  const navigate = useRouter();
  const pathname = usePathname();
  const {
    total,
    allData,
    loading,
    search,
    getAllData,
    setPage,
    page,
    showModal,
    closeModal,
    isModalOpen,
    selected,
    handleSearch,
    addData,
    updateData,
    getSingleData,
    deleteData,
  } = useUser();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<UseFormData>();

  const onSubmit = (values: UseFormData) => {
    if (selected === null) {
      addData(values);
    } else {
      updateData(values, selected);
    }
  };

  const handleEdit = (id: string) => {
    getSingleData(id, reset);
  };

  useEffect(() => {
    getAllData(search, page);
  }, [getAllData, search, page]);

  const pageSize = Math.ceil(total / LIMIT);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid blue",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className="font-semibold">Users ({total})</h2>
            <div className="inputBox">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={search}
                className="z-50"
                style={{ width: "500px", height: "15px" }}
                onChange={(e) => handleSearch(e, pathname, navigate)}
              />
            </div>
            <Button
              variant="contained"
              style={{ width: 100 }}
              endIcon={<AddIcon />}
              onClick={() => showModal(reset, setCategory)}
            >
              Add
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Firstname</StyledTableCell>
                  <StyledTableCell align="center">Lastname</StyledTableCell>
                  <StyledTableCell align="center">Username</StyledTableCell>
                  <StyledTableCell align="center">Phone number</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allData?.map((row: UniversalData, i) => (
                  <StyledTableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.lastName + category}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <EditIcon
                        className="edit"
                        onClick={() => handleEdit(row._id)}
                      />
                      <DeleteIcon
                        className="delete"
                        onClick={() => deleteData(row._id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Fragment>
      )}
      <div>
        {!loading && total > LIMIT ? (
          <Pagination
            count={pageSize}
            page={page}
            onChange={(e, page) => setPage(page, pathname, navigate)}
          />
        ) : null}
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              size="small"
              id="outlined-basicc"
              {...register("firstName", {
                required: "This field must not be empty!",
              })}
              label="Firstname"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <TextField
              size="small"
              id="outlined-basiccc"
              {...register("lastName", {
                required: "This field must not be empty!",
              })}
              label="Lastname"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <TextField
              size="small"
              id="outlined-basicccc"
              {...register("username", {
                required: "This field must not be empty!",
              })}
              label="Username"
              style={{ width: "100%", marginBottom: "20px" }}
              variant="outlined"
            />

            <TextField
              size="small"
              id="outlined-basiccccc"
              {...register("phoneNumber", {
                required: "This field must not be empty!",
              })}
              label="Phone number"
              style={{ width: "100%", marginBottom: "20px" }}
              variant="outlined"
            />

            {selected === null ? (
              <TextField
                size="small"
                id="outlined-basicccccc"
                {...register("password", {
                  required: "This field must not be empty!",
                })}
                label="Password"
                style={{ width: "100%", marginBottom: "20px" }}
                variant="outlined"
              />
            ) : null}

            <div>
              <Button
                variant="contained"
                style={{ width: 100, marginRight: "20px" }}
                type="submit"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ width: 100 }}
                endIcon={selected === null ? <AddIcon /> : <SaveIcon />}
                type="submit"
              >
                {selected === null ? "Add" : "Save"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </main>
  );
};

export default User;