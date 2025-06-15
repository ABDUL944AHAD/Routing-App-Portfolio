import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel({ value }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

function LinearWithValueLabel({ target }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= target) {
                    clearInterval(timer);
                    return target;
                }
                return prev + 10;
            });
        }, 800);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <Box sx={{ width: '100%', mb: 2 }} >
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

LinearWithValueLabel.propTypes = {
    target: PropTypes.number.isRequired,
};

export default LinearWithValueLabel;
