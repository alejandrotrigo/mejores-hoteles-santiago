import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AdminPanelSettings, CategoryOutlined, DashboardOutlined, LoginOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { useRouter } from "next/router";
import { UiContext } from "@/context/ui";


export const SideMenu = () => {

	const router = useRouter();

	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

	const navigateTo = (href: string) => {
		router.push(href);
		toggleSideMenu();
	}

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
				onClose={toggleSideMenu}
    >
        <Box sx={{ width: 250, paddingTop: 2 }}>
            
            <List>
									<ListSubheader>Admin Panel</ListSubheader>

									<ListItemButton onClick={() => navigateTo('/admin')}>
											<ListItemIcon>
													<DashboardOutlined />
											</ListItemIcon>
											<ListItemText primary={'Dashboard'} />
									</ListItemButton >
									<ListItemButton onClick={() => navigateTo('/admin/products')}>
											<ListItemIcon>
													<CategoryOutlined/>
											</ListItemIcon>
											<ListItemText primary={'Productos'} />
									</ListItemButton>

									<ListItemButton onClick={() => navigateTo('/admin/users')}>
											<ListItemIcon>
													<AdminPanelSettings/>
											</ListItemIcon>
											<ListItemText primary={'Usuarios'} />
									</ListItemButton>
            </List>
        </Box>
    </Drawer>
  )
}