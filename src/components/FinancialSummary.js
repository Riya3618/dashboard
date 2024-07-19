import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { PieChart, Pie, Cell } from 'recharts';

const FinancialSummary = () => {
  const data = [
    { name: 'Approved', value: 1091994, color: '#6DC4B8' },
    { name: 'Unapproved', value: 80102, color: '#D96062' },
  ];

  return (
    <Box sx={styles.container}>
   
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}> <Typography sx={styles.cardText}>Autopilot</Typography><br />
          <PowerSettingsNewIcon sx={styles.icon} />
         <br />
          <Typography sx={styles.cardText}>Enabled</Typography>
        </CardContent>
      </Card>

  
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.cardTitle}>Savings Summary</Typography>
          <Box sx={styles.savingsInfo}>
          <Typography sx={styles.dotText}>
          <span style={{ color: '#6DC4B8' }}>&#x25CF;</span> <span style={{ color: '#FFFFFF' }}> Approved </span><span>${data[0].value.toLocaleString()}</span>
  </Typography>
  <Typography sx={styles.dotText} style={{ color: '#D96062' }}>
    <span style={{ color: '#D96062' }}>&#x25CF;</span> <span style={{ color: '#FFFFFF' }}>Unapproved ${data[1].value.toLocaleString()}</span>
  </Typography>
          </Box>
          <Box sx={styles.pieChartContainer}>
            <PieChart width={100} height={100}>
              <Pie
                data={data}
                cx={50}
                cy={50}
                innerRadius={30}
                outerRadius={40}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </Box>
        </CardContent>
      </Card>

      
      <Card sx={styles.dataCard}>
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.cardTitle}>Annual Expenditure</Typography>
          <Typography sx={styles.cardAmount}>$1,020,123.23</Typography>
        </CardContent>
      </Card>

     
      <Card sx={styles.dataCard}>
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.cardTitle}>Annual Savings</Typography>
          <Typography sx={styles.cardAmount}>$677,191.90</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const styles = {
    icon: {
        fontSize: 60, 
        color: '#FFFFFF', 
        background: 'linear-gradient(145deg, #1A1A1A, #333333)', 
        borderRadius: '50%',
        padding: '20px', 
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        transition: 'background 0.3s ease', 
      },
      iconHover: {
        background: 'linear-gradient(145deg, #3A3A3A, #4A4A4A)', 
      },
  container: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#1C1C1C',
    borderRadius: '10px',
  },
  card: {
    backgroundColor: '#333333',
    borderRadius: '10px',
    width: '25%',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  dataCard: {
    backgroundColor: '#444444',
    borderRadius: '10px',
    width: '25%',
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '20px',
  },
  cardContent: {
    padding: '20px',
  },
 
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: '10px',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: '10px',
  },
  cardAmount: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  savingsInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  },
  dotText: {
    fontSize: 14,
  },
  pieChartContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
};

export default FinancialSummary;