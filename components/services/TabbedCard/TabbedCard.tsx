import { Box, Tabs, Tab } from '@mui/material'
import { CustomTabPanel } from './CustomTabPanel';
import React from 'react'
import { Subscription } from '../Subscription/Subscription';
import { FullWeb } from '../FullWeb/FullWeb';
import { CommunityManager } from '../CommunityManager/CommunityManager';
import { SeoSem } from '../SEOSEM/SeoSem';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabbedCard = () => {
	const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };	
	return (
		<>
		<Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '1rem 0' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
    <Tab label="Tu web por suscripción" {...a11yProps(0)} />
    <Tab label="Nosotros la web, tú lo demás" {...a11yProps(1)} />
    {/* <Tab label="Las redes y su importancia" {...a11yProps(2)} />
		<Tab label="Márketing, te lo vendemos" {...a11yProps(3)} /> */}
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0}>
  <Subscription />
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  <FullWeb />
</CustomTabPanel>
{/*<CustomTabPanel value={value} index={2}>
  <CommunityManager />
</CustomTabPanel>
<CustomTabPanel value={value} index={3}>
  <SeoSem />
	</CustomTabPanel>*/}
 </>
	)
}
