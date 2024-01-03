import { Grid, Typography } from "@gib-ui/core";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <Link href="/portal">
            <Grid item display="flex" alignItems="center" gap="5px" sx={{ cursor: "pointer" }}>
                <Grid
                    item
                    sx={{
                        maxWidth: "max-content",
                        color: "#FFF",
                        borderStartStartRadius: "10px",
                        borderEndEndRadius: "10px",
                        bgcolor: "#1C2536",
                        p: "4px 6px"
                    }}
                >
                    <Typography color="#FFF" fontWeight={900}>
                        AYM
                    </Typography>
                </Grid>
                <Typography sx={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Starter<span style={{ fontWeight: "700" }}>Project</span>
                </Typography>
            </Grid>
        </Link>
    );
};

export default Header;
