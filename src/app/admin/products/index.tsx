"use client";

import { useEffect, Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import UniversalData from "@/types/universalData";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { LIMIT } from "@/constants";
import SaveIcon from "@mui/icons-material/Save";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UseFormData from "@/zustand/formData";
import useGetData from "@/zustand";
import useProducts from "@/zustand/product";
import Loader from "@/app/loader";

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

const ProductsPage = () => {
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
        photo,
        uploadPhoto,
    } = useProducts();
    const { categories, getAllCategories } = useGetData();

    const { register, handleSubmit, reset } = useForm<UseFormData>();

    const onSubmit = (values: UseFormData) => {
        values.image = photo;
        values.category = category;
        if (selected === null) {
            addData(values);
        } else {
            updateData(values, selected);
        }
    };

    const handleEdit = (id: string) => {
        getSingleData(id, reset);
    };

    const choosePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = new FormData();
        file.append("file", e.target.files instanceof FileList ? e.target.files[0] : "");
        uploadPhoto(file);
    };

    useEffect(() => {
        getAllData(search, page);
    }, [getAllData, search, page]);

    useEffect(() => {
        getAllCategories();
    }, [getAllCategories]);

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
                        }}>
                        <h2 style={{ width: 150 }}>Products ({total})</h2>
                        <div className="inputBox">
                            <TextField
                                id="outlined-basic"
                                label="Search"
                                variant="outlined"
                                value={search}
                                style={{ width: "100%" }}
                                onChange={(e) => handleSearch(e, pathname, navigate)}
                            />
                            <SearchIcon />
                        </div>
                        <Button
                            variant="contained"
                            style={{ width: 100 }}
                            endIcon={<AddIcon />}
                            onClick={() => showModal(reset, setCategory)}>
                            Add
                        </Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Image</StyledTableCell>
                                    <StyledTableCell align="center">Title</StyledTableCell>
                                    <StyledTableCell align="center">Price</StyledTableCell>
                                    <StyledTableCell align="center">Quantity</StyledTableCell>
                                    <StyledTableCell align="center">Category</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allData?.map((row: UniversalData, i) => (
                                    <StyledTableRow
                                        key={i}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <StyledTableCell component="th" scope="row">
                                            <Image
                                                src={row.image?.url ?? ""}
                                                width={50}
                                                height={50}
                                                alt="sdsd"
                                                priority
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.title}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            ${row.price}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.quantity}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.category?.name}
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
                aria-describedby="parent-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="file" {...register("image")} onChange={choosePhoto} />

                        <TextField
                            size="small"
                            id="outlined-basicc"
                            {...register("title", {
                                required: "This field must not be empty!",
                            })}
                            label="Title"
                            variant="outlined"
                            style={{ width: "100%", marginBottom: "20px" }}
                        />

                        <TextField
                            size="small"
                            id="outlined-basiccc"
                            {...register("price", {
                                required: "This field must not be empty!",
                            })}
                            label="Price"
                            variant="outlined"
                            style={{ width: "100%", marginBottom: "20px" }}
                        />

                        <TextField
                            size="small"
                            id="outlined-basicccc"
                            {...register("quantity", {
                                required: "This field must not be empty!",
                            })}
                            label="Quantity"
                            style={{ width: "100%", marginBottom: "20px" }}
                            variant="outlined"
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Category"
                                value={category}
                                style={{ width: "100%", marginBottom: "20px" }}
                                onChange={(e) => setCategory(e.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {categories.map((pr, i) => (
                                    <MenuItem key={i} value={pr._id}>
                                        {pr.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            size="small"
                            id="outlined-basicccccc"
                            {...register("description", {
                                required: "This field must not be empty!",
                            })}
                            label="Description"
                            style={{ width: "100%", marginBottom: "20px" }}
                            variant="outlined"
                        />

                        <div>
                            <Button
                                variant="contained"
                                style={{ width: 100, marginRight: "20px" }}
                                type="submit"
                                onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                style={{ width: 100 }}
                                endIcon={selected === null ? <AddIcon /> : <SaveIcon />}
                                type="submit">
                                {selected === null ? "Add" : "Save"}
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </main>
    );
};

export default ProductsPage;
